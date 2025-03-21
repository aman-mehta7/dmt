import { FC, useEffect } from "react";
import { Button  } from "../../../components";
import { useNavigate, useParams } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { getPlaceRooms } from "../../../redux/actions/places";
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
  const { id: placeId } = useParams();
  const dispatch = useAppDispatch();

  const { rooms } = useAppSelector((state: RootAppState) => state.places);

  useEffect(() => {
    dispatch(getPlaceRooms(Number(placeId)));
  }, []);

  return (
    <div>
      <div
        className={`flex flex-col md:flex-row gap-4 md:gap-0 justify-between items-center`}
      >
        <h2 className={`text-3xl text-dark-blue font-medium`}>
          {`Rooms & Packages (${rooms.length})`}
        </h2>
        <Button
          variant="outline"
          onClick={() => navigate(`/app/rooms/create`)}
          // onClick={() => navigate(`/app/stays/${placeId}/rooms/create`)}
          icon={
            <CiSquarePlus className={`text-primary group-hover:text-white`} />
          }
          title={`Add New Room`}
        />
      </div>
      
        <div
          className={`grid gap-8 grid-flow-rows grid-cols-1 sm:grid-cols-2 md:grid-cols-3  mt-12`}
        >
            <div
              className={`rounded-xl shadow-xl  hover:border-primary smooth overflow-hidden`}
            >
              <img
                src="https://dmttourism.com/images/property/15/IMG_20250224_18120667bc69be62936.jpg"
                alt=""
                className={`max-h-[200px] w-full object-cover`}
              />
              <div
                className={`flex text-start flex-col items-start justify-start p-4 gap-4`}
              >
                <h3 className={`text-lg font-medium text-dark-blue`}>Title</h3>
                <div className={`flex gap-2 items-center`}>
                  <IoBedOutline />
                  <h3 className={`text-sm text-dark-blue font-semibold`}>{`Beds -`}</h3>
                  
                    
                      <div>
                        <h4 className={`text-sm text-gray font-normal capitalize`}>
                          400 king
                        </h4>
                      </div>
                    
                  
                </div>
                <div className={`flex gap-2 items-center`}>
                  <IoBedOutline />

                  <h3 className={`text-sm text-dark-blue font-semibold`}>{`Type -`}</h3>
                  <h4 className={`text-sm text-gray font-normal capitalize`}>
                    Room Type
                  </h4>
                </div>
                <div className={`flex items-center justify-between w-full`}>
                  <div className={`gap-2 items-center`}>
                    <h3
                      className={`text-xl font-medium text-dark-blue`}
                    >Npr 5</h3>
                    <h4 className={`text-sm text-gray font-normal`}>{`per night`}</h4>
                  </div>
                  <div className={`flex gap-3 items-center`}>
                    <button
                      type="button"
                      className={`p-3 bg-white rounded-full`}
                      onClick={()=> (console.log())}
                    >
                      <FiEdit className={`text-primary text-base`} />
                    </button >
                    <DeleteRoom id={8}/>
                  </div>
                </div>
              </div>
            </div>
        </div>
    </div>
  );
};

export default StaysRoomsPage;
