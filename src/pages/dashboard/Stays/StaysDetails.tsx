import { FaLocationDot } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
import { LuShare } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useState, useRef } from "react";
import { BiDumbbell } from "react-icons/bi";
import { GrElevator } from "react-icons/gr";
import { MdOutlineFireplace } from "react-icons/md";
import { IoIosWifi } from "react-icons/io";
import { LiaHotTubSolid } from "react-icons/lia";
import { BiSolidWasher } from "react-icons/bi";
import { MdOutlinePool } from "react-icons/md";
import { BiSolidDryer } from "react-icons/bi";
import { PiBowlSteamBold } from "react-icons/pi";
import { RiParkingBoxLine } from "react-icons/ri";
import { MdOutlineFamilyRestroom } from "react-icons/md";
import { FaSmoking } from "react-icons/fa";
import { BsBalloonFill } from "react-icons/bs";
import { MdPets } from "react-icons/md";
import { BiHandicap } from "react-icons/bi";
import { FaRegCircleCheck } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineAccessTime } from "react-icons/md";

const StaysDetails = () => {
  const [count, setCount] = useState(true);
  const ref = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const StickyDivChange = () => {
    if (count === true) {
      return ref2.current?.classList.add("lg:block");
    } else if (count === false) {
      return ref2.current?.classList.remove("lg:block");
    }
  };

  const StickyDivChange2 = () => {
    if (!count === true) {
      return ref.current?.classList.add("lg:block");
    } else if (!count === false) {
      return ref.current?.classList.remove("lg:block");
    }
  };

  return (

<>

      {/* -----the sticky divs----- */}

      <div className=" h-[260vh] w-full md:px-16 absolute top-36 left-7 md:top-[1020px] lg:top-[600px] flex justify-between mt-6 ">
        {/* lines & buttons---- */}
        <div className=" bg-white place-content-center  -ml-1   md:pl-20 lg:w-[68%] md:w-[95%] border-zinc-300 w-[91%] sticky top-[60px]  z-10 md:h-[102px] h-[93px] border-b border-t ">
          <div className="font-semibold text-sm flex gap-3 transition-all px-1 md:gap-8 md:text-xl  ">
            <a
              href="#description"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl "
            >
              Details
            </a>
            <a
              href="#room"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl"
            >
              Room
            </a>
            <a
              href="#info"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl"
            >
              Info
            </a>
            <a
              href="#reviews"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl"
            >
              Reviews
            </a>
          </div>
        </div>
        {/* lines & buttons end ---- */}

        {/* sticky div for room selection */}

        <div
          ref={ref}
          className="hidden lg:block mt-7 pt-5 mr-1 sticky top-[140px] z-10 w-[30%]
         h-[120px] border-[0.2px] border-zinc-300 bg-white rounded-md shadow-md shadow-[#bab9c6] p-4 "
        >
          <h1 className="font-semibold text-lg ">Select room for pricing</h1>
          <p className="pt-5 text-sm ">
            Free cancellation until{" "}
            <span className="text-[#9427F7]"> May 28, 2025</span>
          </p>
        </div>

        <div
          ref={ref2}
          className=" hidden sticky top-[140px] mt-7 pt-5 mr-1 z-10 w-[30%]
         h-[320px] border-[0.2px] border-zinc-300 bg-white rounded-md shadow-md shadow-[#bab9c6] "
        >
          <div className=" border-b border-zinc-300 px-4">
            <h1 className="font-semibold text-lg ">NPR500.00</h1>
          </div>
          <div className="flex justify-between border-b border-zinc-300 px-4 ">
            <p className="py-2 text-sm ">test product</p>
            <p className="py-2 text-sm ">NPR500.00</p>
          </div>
          <div className="flex justify-between border-b border-zinc-300 px-4 ">
            <p className="py-2 text-sm ">Total</p>
            <p className="py-2 text-sm ">NPR500.00</p>
          </div>
          <div className="flex flex-col  items-center  mt-4 gap-4 text-white ">
            <button className="p-3 shadow-md shadow-[#bab9c6]  bg-[#9427F7] rounded ">
              Request to Book
            </button>

            <p className="w-[80%] flex text-center justify-center items-center text-black ">
              You’ll be able to review before paying.
            </p>

            <div className="inline-flex gap-4">
              <a
                href=""
                className="bg-blue-600 shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md p-1"
              >
                <FaFacebook />
                Share
              </a>
              <a
                href=""
                className="bg-black shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md p-1"
              >
                <FaXTwitter />
                Post
              </a>
              <a
                href=""
                className="bg-blue-800 shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md p-1"
              >
                Share
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* -----the sticky divs----- end */}

    <div className=" relative p-6 overflow-hidden ">
      <header className="overflow-hidden">
        <div className="md:px-12">
          <div className="flex justify-between">
            <div>
              <h1 className="text-xl font-semibold md:text-2xl ">Test</h1>
              <p className="flex py-1 opacity-60 text-sm ">
                <i className="text-[#9427F7]">
                  <FaLocationDot />
                </i>
                विराटनगर, <span>Nepal</span>
              </p>
            </div>

            <div className="relatrive w-fit h-fit group ">
              <button
                className=" shadow-md shadow-[#bab9c6]  mb-1 flex justify-center items-center border rounded-md p-[10px] px-[14px] border-[#9427F7] text-sm opacity-70
             group-hover:bg-[#9427F7] group-hover:text-white transition-all "
              >
                <i className="mr-1.5">
                  <LuShare />
                </i>
                Share
                <IoCaretDownOutline />
              </button>
              <ul
                className=" shadow-md shadow-[#bab9c6]  group-hover:block transition-all absolute z-50 hidden text-zinc-500 w-fit h-fit rounded-md [&>*]:rounded-md
               bg-zinc-100 border border-[#ebd5ff] text-[13px] md:text-sm text-nowrap right-5 md:right-7 "
              >
                <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                  <a href="">share on facebook</a>
                </li>
                <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                  <a href="">share on facebook</a>
                </li>
                <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                  <a href="">share on facebook</a>
                </li>
                <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                  <a href="">share on facebook</a>
                </li>
                <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                  <a href="">share on facebook</a>
                </li>
              </ul>
            </div>
          </div>

          {/* images for mid and large devices */}

          <div className="hidden md:block lg:flex lg:gap-10 xl: lg:justify-center lg:items-center lg:px-2  ">
            <div className=" lg:w-[50%] ">
              <img
                className="w-full h-[400px] rounded-md object-cover mt-5 border-2 m-1 "
                src="https://dmttourism.com/storage/css/thumbnail_images/UD3CmjAMxqYJNjVRs0260yfyiwWYUOAg0AOSStjb.jpg"
                alt=""
              />
            </div>
            <div className=" flex gap-5 justify-center items-center px-1 pl-2 lg:flex lg:gap-3 lg:items-end lg:justify-evenly ">
              <div className=" w-[50%] ">
                <img
                  className=" w-full h-[200px] rounded-md object- mt-5 object-cover border "
                  src="https://dmttourism.com/storage/css/hotelimage/j6eNZxRrkGpHojlh5SFqYHfR2MIIYo9qPLUVXeSK.jpg"
                  alt=""
                />
                <img
                  className="w-full h-[200px] rounded-md object-cover mt-5 responsive "
                  src="https://dmttourism.com/storage/css/hotelimage/CRksy8GIyEdGadqdbKRhPcALKtD6dtOSMJqIXwWH.jpg"
                  alt=""
                />
              </div>
              <div className="b w-[50%]">
                <img
                  className="w-full h-[200px] rounded-md object-cover mt-5 "
                  src="https://dmttourism.com/storage/css/hotelimage/FE7sOiBp5X9Dw5wbjIuttq4Ym4IAsmLwCyf0jpTX.jpg"
                  alt=""
                />

                <img
                  className="w-full h-[200px] rounded-md object-cover mt-5 "
                  src="https://dmttourism.com/storage/css/hotelimage/4C56I4oKhC0ZpmSI9bceYKnXy2xeYe13LJlIWIaW.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>

        {/* images for mid and large devices--end-- */}
      </header>


      <body className="lg:w-[75%] overflow-hidden h-[100%]">
        {/* img & description */}
        <div className="md:px-20 pt-28 md:pt-36 ">
          <img
            className=" absolute scale-[0.17] -left-[89px] top-[45px]
            md:-left-[9px] md:top-[49px] md:pt-3  md:scale-[0.2]"
            src="https://dmttourism.com/images/default-profile.png"
            alt=""
          />
          <div id="description" className="mt-[90px] flex flex-col gap-3  ">
            <h1 className="text-xl font-semibold md:text-2xl ">Description</h1>
            <p className="w-[90%] opacity-70">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
              amet at, quam enim repellendus numquam harum aperiam debitis a
              sapiente?
            </p>
          </div>
        </div>
        {/* img & description end */}

        {/* -----card1----- */}
        <div id="rooms" className="card-wrapper md:px-20  ">
          <h1 className="text-xl font-semibold md:text-3xl pt-9 ">
            Choose your room
          </h1>
          <div className="flex flex-col gap-3 mt-5 md:flex-row md:gap-5 md:w-[95%] ">
            <div
              className=" bg-[#F4F4F4] border-[#9427F7] border h-auto w-[90%] lg:w-[85%] md:h-[310px] p-4 xl:h-[410px]
           rounded-md px-3 text-sm flex flex-col gap-2 md:pt-5 "
            >
              <ul className="list-disc list-inside flex flex-col gap-2 ">
                <li>No bed types available. </li>

                <li>
                  {" "}
                  <span className=" hover:text-[#9427F7] transition-all inline-flex items-center ">
                    <button>More details</button>
                    <i className="scale-[0.8]">
                      <FaAngleDown />{" "}
                    </i>
                  </span>
                </li>
              </ul>
              <div className="flex justify-between items-center ">
                <span>
                  <h1>NPR 0</h1>
                  <p>per night</p>
                </span>
                <button className="border-red-600 text-red-600 font-semibold border rounded-xl p-[10px] px-[14px] text-sm">
                  Sold Out
                </button>
              </div>
            </div>
            {/* -----card1 end----- */}

            {/* -----card2----- */}
            <div
              className=" bg-[#F4F4F4] border-[#9427F7] border h-auto w-[90%] lg:w-[85%] md:h-[310px] xl:h-[410px] p-4
            rounded-md px-3 text-sm flex flex-col gap-2 "
            >
              <img
                className="object-cover w-full h-[200px] rounded-md md:h-[140px] xl:h-[220px] "
                src="https://dmttourism.com/images/property/13/1740383146_promoted1.jpeg"
                alt=""
              />
              <h1 className="text-[16px] font-semibold pt-2 ">test product</h1>
              <ul className="list-disc list-inside flex flex-col gap-2 ">
                <li>Bed Type: king - Quantity: 1 </li>

                <li>
                  {" "}
                  <span className=" hover:text-[#9427F7] transition-all inline-flex items-center ">
                    <button>More details</button>
                    <i className="scale-[0.8]">
                      <FaAngleDown />{" "}
                    </i>
                  </span>
                </li>
              </ul>
              <div className="flex justify-between items-center ">
                <span>
                  <h1>NPR 0</h1>
                  <p>per night</p>
                </span>
                {count ? (
                  <button
                    onClick={() => {
                      {
                        count ? setCount(false) : setCount(true);
                        StickyDivChange();
                        StickyDivChange2();
                      }
                    }}
                    className="bg-[#9427F7] shadow-md shadow-[#bab9c6] text-white font-semibold rounded-xl p-[10px] px-[14px] text-sm"
                  >
                    Reserve
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      {
                        count ? setCount(false) : setCount(true);
                        StickyDivChange();
                        StickyDivChange2();
                      }
                    }}
                    className="bg-[#ffffff] text-[#9427F7] font-semibold shadow-md shadow-[#bab9c6] rounded-xl p-[10px] px-[14px] text-sm flex justify-center items-center gap-1 "
                  >
                    {" "}
                    <FaCheck />
                    Selected
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
        {/* -----card2----- end  */}

        {/* Amenities ( Public Area ) */}
        <div className="md:px-20">
          <h1 className="text-xl font-semibold md:text-3xl pt-9 ">
            Amenities ( Public Area )
          </h1>
          <div className="flex flex-wrap gap-2 w-[90%] mt-4 [&>*]:bg-zinc-100 [&>*]:rounded-md [&>*]:flex [&>*]:flex-col [&>*]:items-center [&>*]:justify-center [&>*]:p-2 [&>*]:text-zinc-400 ">
            <h1>Internet</h1>
            <h1>
              <BiDumbbell />
              Gym
            </h1>
            <h1>
              <GrElevator />
              Elevator in Building
            </h1>
            <h1>
              <MdOutlineFireplace />
              Indoor Fireplace
            </h1>
            <h1>Buzzer/Wireless Intercom</h1>
            <h1>Doorman</h1>
            <h1>Shampoo</h1>
            <h1>
              <IoIosWifi />
              Wireless Internet
            </h1>
            <h1>
              <LiaHotTubSolid />
              Hot Tub
            </h1>
            <h1>
              <BiSolidWasher />
              Washer
            </h1>
            <h1>
              <MdOutlinePool />
              Pool
            </h1>
            <h1>
              <BiSolidDryer />
              Dryer
            </h1>
            <h1>
              <PiBowlSteamBold />
              Breakfast
            </h1>
            <h1>
              <RiParkingBoxLine />
              Free Parking on Premises
            </h1>
            <h1>
              <MdOutlineFamilyRestroom />
              Family/Kid Friendly
            </h1>
            <h1>
              <FaSmoking />
              Smoking Allowed
            </h1>
            <h1>
              <BsBalloonFill />
              Suitable for Events
            </h1>
            <h1>
              <MdPets />
              Pets Allowed
            </h1>
            <h1>Pets live on this property</h1>
            <h1>
              <BiHandicap />
              Wheelchair Accessible
            </h1>
            <h1>
              <FaRegCircleCheck />
              Smoke Detector
            </h1>
            <h1>
              <FaRegCircleCheck />
              Carbon Monoxide Detector
            </h1>
            <h1>
              <FaRegCircleCheck />
              First Aid Kit
            </h1>
            <h1>
              <FaRegCircleCheck />
              Safety Card
            </h1>
            <h1>
              <FaRegCircleCheck />
              Fire Extinguisher
            </h1>
          </div>
        </div>
        {/* Amenities ( Public Area ) end */}
        {/* Reviews */}
        <div className="md:px-20">
          <h1 className=" text-xl font-semibold md:text-3xl pt-9 ">Rewiews</h1>
          <div className="flex items-center gap-4">
            <img src="" alt="" />
            <div className="text-sm ">
              <h1 className="">Anupam</h1>
              <p className="opacity-50 text-[12px] ">May 2022</p>
            </div>
          </div>
          <div className="text-[12px] ">
            <p>Highly recommended</p>

            <p className="mt-5">
              Highlight of my trip. I learned so mutch about the real local
              culture and its development,....
            </p>
          </div>
        </div>
        {/* Reviews end */}
        {/* Policies */}
        <div className="md:px-20 w-[90%] overflow-hidden text-wrap ">
          <h1 className=" text-xl font-semibold md:text-3xl pt-9 ">Policies</h1>
          <h1 className=" font-semibold pt-2 ">Good To Know</h1>
        </div>
        <div className="md:px-20 mr-[50px] ">
          <div className="columns-2  border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">Clildren</p>
            <p className="py-2 text-sm ">child friendly</p>
          </div>
          <div className="columns-2  border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">Pets</p>
            <p className="py-2 text-sm ">No pets policy avilable</p>
          </div>
          <div className="columns-2 border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">Breakfast</p>
            <p className="py-2 text-sm ">6am to 8am</p>
          </div>
          <div className="columns-2  border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">Extra bed</p>
            <p className="py-2 text-sm ">Child - free, Adult - Changes Apply</p>
          </div>
          <div className="columns-2  border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">
              Accepts payment <br /> methods
            </p>
            <p className="py-2 text-sm ">
              The hotel accepts the following payment methods: icon icon{" "}
            </p>
          </div>
          <div className="columns-2  border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">Property Policy</p>
            <p className="py-2 text-sm ">No property policy avilable</p>
          </div>
          <div className="columns-2  border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">Platform Policy</p>
            <p className="py-2 text-sm ">No description avilable</p>
          </div>
          <div className="columns-2  border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">Rufandable</p>
            <p className="py-2 text-sm ">No refundable information</p>
          </div>
          <div className="columns-2  border-b border-zinc-300 px-4">
            <p className="py-2 text-sm ">Non Refundable</p>
            <p className="py-2 text-sm ">No non refundable information</p>
          </div>
          <div className="columns-2  px-4">
            <p className="py-2 text-sm ">Important information</p>
            <p className="py-2 text-sm ">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore,
              reprehenderit?
            </p>
          </div>
        </div>
        {/* Policies end */}
        <div className="md:px-20 w-[80%] ">
          <h1 className=" font-semibold pt-8 px-4 ">Check in and check out</h1>
          <div className="flex items-center gap-24 text-nowrap md:gap-36 mt-3 ml-7 font-semibold ">
            <p className="flex items-center gap-6">
              {" "}
              <span className="scale-[3]">
                <MdOutlineAccessTime />
              </span>{" "}
              Check in: <br />
              01:28 PM
            </p>
            <p className="flex items-center gap-6">
              {" "}
              <span className="scale-[3]">
                <MdOutlineAccessTime />
              </span>{" "}
              Check in: <br />
              01:28 PM
            </p>
          </div>
        </div>
      </body>

      <div className="block lg:hidden ">
        <div
          className={
            count ? `w-full h-[120px] mt-5  ` : `w-full h-[320px] mt-5 `
          }
        >
          {count ? (
            <div
              className="block md:block lg:hidden mt-10 pt-5 ml-20 md:ml-28 md:w-[30%] mx-[15%]
          h-[120px] border-[0.2px] border-zinc-300 bg-white rounded-md shadow-md shadow-[#bab9c6] p-4 "
            >
              <h1 className="font-semibold text-lg ">
                Select room for pricing
              </h1>
              <p className="pt-5 text-sm ">
                <span className="text-[#9427F7]"> May 28, 2025</span>
              </p>
            </div>
          ) : (
            <div
              className=" block md:block lg:hidden mt-10 pt-5 md:ml-28 mx-[15%] md:w-[38%] w-[75%]
          h-[320px] border-[0.2px] border-zinc-300 bg-white rounded-md shadow-md shadow-[#bab9c6] "
            >
              <div className=" border-b border-zinc-300 px-4">
                <h1 className="font-semibold text-lg ">NPR500.00</h1>
              </div>
              <div className="flex justify-between border-b border-zinc-300 px-4 ">
                <p className="py-2 text-sm ">test product</p>
                <p className="py-2 text-sm ">NPR500.00</p>
              </div>
              <div className="flex justify-between border-b border-zinc-300 px-4 ">
                <p className="py-2 text-sm ">Total</p>
                <p className="py-2 text-sm ">NPR500.00</p>
              </div>
              <div className="flex flex-col  items-center  mt-4 gap-4 text-white ">
                <button className="p-3 shadow-md shadow-[#bab9c6]  bg-[#9427F7] rounded ">
                  Request to Book
                </button>

                <p className="w-[80%] flex text-center justify-center items-center text-black ">
                  You’ll be able to review before paying.
                </p>

                <div className="inline-flex gap-4">
                  <a
                    href=""
                    className="bg-blue-600 shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md px-1 py-1"
                  >
                    <FaFacebook />
                    Share
                  </a>
                  <a
                    href=""
                    className="bg-black shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md px-1 "
                  >
                    <FaXTwitter />
                    Post
                  </a>
                  <a
                    href=""
                    className="bg-blue-800 text-nowrap shadow-md shadow-[#bab9c6] flex items-center justify-center gap-1 rounded-md px-1"
                  >
                    in Share
                  </a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
    </>
  );
};


export default StaysDetails;
