// import { FC, useEffect } from "react";
// import { Button  } from "../../../components";
// import { useNavigate, useParams } from "react-router-dom";
// import { CiSquarePlus } from "react-icons/ci";
// import { getPlaceRooms } from "../../../redux/actions/places";
// import {
//   useAppDispatch,
//   useAppSelector,
// } from "../../../hooks/useTypedSelectors";
// import { RootAppState } from "../../../redux/store";
// import { IoBedOutline } from "react-icons/io5";
// import { FiEdit } from "react-icons/fi";
// import DeleteRoom from "./Delete/DeleteRoom";

// const StaysRoomsPage: FC = () => {
//   const navigate = useNavigate();
//   const { id: placeId } = useParams();
//   const dispatch = useAppDispatch();

//   const { rooms } = useAppSelector((state: RootAppState) => state.places);

//   useEffect(() => {
//     dispatch(getPlaceRooms(Number(placeId)));
//   }, []);

//   return (
//     <div>
//       <div
//         className={`flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center`}
//       >
//         <h2 className={`text-3xl text-dark-blue font-medium`}>
//           {`Rooms & Packages (${rooms.length})`}
//         </h2>
//         <Button
//           variant="outline"
//           onClick={() => navigate(`/app/rooms/create`)}
//           // onClick={() => navigate(`/app/stays/${placeId}/rooms/create`)}
//           icon={
//             <CiSquarePlus className={`text-primary group-hover:text-white`} />
//           }
//           title={`Add New Room`}
//         />
//       </div>
      
//         <div
//           className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-12`}
//         >
//             <div
//               className={`rounded-xl shadow-xl  hover:border-primary smooth overflow-hidden`}
//             >
//               <img
//                 src="https://dmttourism.com/images/property/15/IMG_20250224_18120667bc69be62936.jpg"
//                 alt=""
//                 className={`max-h-[200px] w-full object-cover`}
//               />
//               <div
//                 className={`flex text-start flex-col items-start justify-start p-4 gap-4`}
//               >
//                 <h3 className={`text-lg font-medium text-dark-blue`}>Title</h3>
//                 <div className={`flex gap-2 items-center`}>
//                   <IoBedOutline />
//                   <h3 className={`text-sm text-dark-blue font-semibold`}>{`Beds -`}</h3>
                  
                    
//                       <div>
//                         <h4 className={`text-sm text-gray font-normal capitalize`}>
//                           400 king
//                         </h4>
//                       </div>
                    
                  
//                 </div>
//                 <div className={`flex gap-2 items-center`}>
//                   <IoBedOutline />

//                   <h3 className={`text-sm text-dark-blue font-semibold`}>{`Type -`}</h3>
//                   <h4 className={`text-sm text-gray font-normal capitalize`}>
//                     Room Type
//                   </h4>
//                 </div>
//                 <div className={`flex items-center justify-between w-full`}>
//                   <div className={`gap-2 items-center`}>
//                     <h3
//                       className={`text-xl font-medium text-dark-blue`}
//                     >Npr 5</h3>
//                     <h4 className={`text-sm text-gray font-normal`}>{`per night`}</h4>
//                   </div>
//                   <div className={`flex gap-3 items-center`}>
//                     <button
//                       type="button"
//                       className={`p-3 bg-white rounded-full`}
//                       onClick={()=> (console.log())}
//                     >
//                       <FiEdit className={`text-primary text-base`} />
//                     </button >
//                     <DeleteRoom id={8}/>
//                   </div>
//                 </div>
//               </div>
//             </div>
//         </div>
//     </div>
//   );
// };

// export default StaysRoomsPage;
import { FC, useEffect, useState } from "react";
import { Button } from "../../../components";
import { Select } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { getPlaces, getPlaceRooms } from "../../../redux/actions/places";
import {
  useAppDispatch,
  useAppSelector,
} from "../../../hooks/useTypedSelectors";
import { RootAppState } from "../../../redux/store";
import { IoBedOutline } from "react-icons/io5";
import { FiEdit } from "react-icons/fi";
import DeleteRoom from "./Delete/DeleteRoom";

const StaysRoomsPage: FC = () => {
  const navigate = useNavigate();
  const { id: placeIdParam } = useParams();
  const dispatch = useAppDispatch();

  const { rooms, sellerPlaces } = useAppSelector((state: RootAppState) => state.places);
  
  // ✅ State to track selected place
  const [selectedPlace, setSelectedPlace] = useState<number | null>(
    placeIdParam ? Number(placeIdParam) : null
  );

  useEffect(() => {
    dispatch(getPlaces()); // Fetch places on mount
  }, [dispatch]);

  useEffect(() => {
    if (selectedPlace) {
      dispatch(getPlaceRooms(selectedPlace)); // Fetch rooms when place changes
    }
  }, [dispatch, selectedPlace]);
console.log(rooms,'rooms')
  return (
    <div>
      <div className={`flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center`}>
        <h2 className={`text-3xl text-dark-blue font-medium`}>
          {`Rooms & Packages (${rooms.length})`}
        </h2>
        <Button
          variant="outline"
          onClick={() => navigate(`/app/rooms/create`)}
          icon={<CiSquarePlus />}
          title={`Add New Room`}
        />
      </div>

      {/* ✅ Dropdown to select place */}
      <div className="my-4 border rounded-md border-[#D2D2D2] ">
        <Select
          className="w-full"
          placeholder="Select a place"
          value={selectedPlace}
          onChange={(value) => setSelectedPlace(value)}
        >
          {sellerPlaces.map((place) => (
            <Select.Option key={place.id} value={place.id}>
              {place.title}
            </Select.Option>
          ))}
        </Select>
      </div>

      {/* ✅ Display rooms based on selected place */}
      {/* <div className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12`}>
        {rooms.map((room) => (
          <div key={room.id} className={`rounded-xl shadow-xl hover:border-primary smooth overflow-hidden`}>
            <img
              src={room?.images?.[0] || "https://via.placeholder.com/400"}
              alt="Room"
              className={`max-h-[200px] w-full object-cover`}
            />
            <div className={`flex text-start flex-col items-start justify-start p-4 gap-4`}>
              <h3 className={`text-lg font-medium text-dark-blue`}>{room.title}</h3>
              
              <div className={`flex gap-2 items-center`}>
                <IoBedOutline />
                <h3 className={`text-sm text-dark-blue font-semibold`}>{`Beds -`}</h3>
                <div>
                  {room.beds.map((bed, index) => (
                    <h4 key={index} className={`text-sm text-gray font-normal capitalize`}>
                      {`${bed.amount} ${bed.bed_type}`}
                    </h4>
                  ))}
                </div>
              </div>

              <div className={`flex gap-2 items-center`}>
                <IoBedOutline />
                <h3 className={`text-sm text-dark-blue font-semibold`}>{`Type -`}</h3>
                <h4 className={`text-sm text-gray font-normal capitalize`}>{room.room_type}</h4>
              </div>

              <div className={`flex items-center justify-between w-full`}>
                <div className={`gap-2 items-center`}>
                  <h3 className={`text-xl font-medium text-dark-blue`}>Npr {room.price}</h3>
                  <h4 className={`text-sm text-gray font-normal`}>{`per night`}</h4>
                </div>
                <div className={`flex gap-3 items-center`}>
                  <button type="button" className={`p-3 bg-white rounded-full`} onClick={() => console.log("Edit Room")}>
                    <FiEdit className={`text-primary text-base`} />
                  </button>
                  <DeleteRoom id={room.id} />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div> */}
<div className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3 mt-12`}>
  {rooms.map((room) => (
    <div key={room.id} className={`rounded-xl shadow-xl hover:border-primary smooth overflow-hidden`}>
      {/* ✅ Room Image Handling */}
      <img
  src={room?.images?.length ? room.images[0] : "https://dmttourism.com/images/property/15/IMG_20250224_18120667bc69be62936.jpg"}
  alt={room?.title || "Room Image"}
  className="max-h-[200px] w-full object-cover"
/>

      <div className={`flex text-start flex-col items-start justify-start p-4 gap-4`}>
        {/* ✅ Room Title */}
        <h3 className={`text-lg font-medium text-dark-blue`}>{room.title}</h3>

        {/* ✅ Beds Section */}
        <div className={`flex gap-2 items-center`}>
          <IoBedOutline />
          <h3 className={`text-sm text-dark-blue font-semibold`}>{`Beds -`}</h3>
          <div>
            {room.beds.length > 0 ? (
              room.beds.map((bed, index) => (
                <h4 key={index} className={`text-sm text-gray font-normal capitalize`}>
                  {`${bed.amount} ${bed.bed_type}`}
                </h4>
              ))
            ) : (
              <h4 className={`text-sm text-gray font-normal`}>N/A</h4>
            )}
          </div>
        </div>

        {/* ✅ Room Type */}
        <div className={`flex gap-2 items-center`}>
          <IoBedOutline />
          <h3 className={`text-sm text-dark-blue font-semibold`}>{`Type -`}</h3>
          <h4 className={`text-sm text-gray font-normal capitalize`}>{room.room_type}</h4>
        </div>

        {/* ✅ Discount & Transfer Service */}
        {room.isDiscountAvailable && (
          <div className={`flex gap-2 items-center`}>
            <h3 className={`text-sm text-dark-blue font-semibold`}>{`Discount -`}</h3>
            <h4 className={`text-sm text-gray font-normal`}>{room.discount ? `Npr ${room.discount}` : "N/A"}</h4>
          </div>
        )}

        <div className={`flex gap-2 items-center`}>
          <h3 className={`text-sm text-dark-blue font-semibold`}>{`Transfer Service -`}</h3>
          <h4 className={`text-sm text-gray font-normal capitalize`}>{room.transferService}</h4>
        </div>

        {/* ✅ Extra Amount (Only if `extraAmount` exists) */}
        {room.extraAmount !== null && (
          <div className={`flex gap-2 items-center`}>
            <h3 className={`text-sm text-dark-blue font-semibold`}>{`Extra Cost -`}</h3>
            <h4 className={`text-sm text-gray font-normal`}>{`Npr ${room.extraAmount}`}</h4>
          </div>
        )}

        {/* ✅ Price & Actions */}
        <div className={`flex items-center justify-between w-full`}>
          <div className={`gap-2 items-center`}>
            <h3 className={`text-xl font-medium text-dark-blue`}>{`Npr ${room.price}`}</h3>
            <h4 className={`text-sm text-gray font-normal`}>{`per night`}</h4>
          </div>

          <div className={`flex gap-3 items-center`}>
            <button type="button" className={`p-3 bg-white rounded-full`}   onClick={() => {
    navigate(`/app/rooms/edit/${room.id}?placeId=${room.place_id}`, { replace: true }); // ✅ Pass both roomId & placeId
   // ✅ Change URL dynamically
  }}
>
              <FiEdit className={`text-primary text-base`} />
            </button>
            {/* <DeleteRoom id={room.id} /> */}
            {room.id !== undefined && <DeleteRoom id={room.id} />}

          </div>
        </div>
      </div>
    </div>
  ))}
</div>

      {/* ✅ Show message if no rooms found */}
      {rooms.length === 0 && selectedPlace && (
        <p className="text-center text-gray-500 mt-4">No rooms found for this place.</p>
      )}
    </div>
  );
};

export default StaysRoomsPage;
