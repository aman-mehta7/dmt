import { FaLocationDot } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
import { LuShare } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useState, useRef } from "react";

const StaysDetails = () => {
  const [count, setCount] = useState(true);
  const ref = useRef<HTMLInputElement>(null);
  const ref2 = useRef<HTMLInputElement>(null);

  const StickyDivChange = () => {
    if (count === true) {
      return  ref2.current?.classList.add("lg:block");
    } else if (count === false) {
      return ref2.current?.classList.remove("lg:block");
    }
  };
  
  const StickyDivChange2 = () => {
    if (!count === true) {
      return  ref.current?.classList.add("lg:block");
    } else if (!count === false) {
      return ref.current?.classList.remove("lg:block");
    }
  };

  return (
    <div className=" p-6 ">
      <header>
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

            <div className="">
              <button
                className="flex justify-center items-center border rounded-3xl p-[10px] px-[14px] border-[#9427F7] text-sm opacity-70
             hover:bg-[#9427F7] hover:text-white transition-all "
              >
                <i className="mr-1.5">
                  <LuShare />
                </i>
                Share
                <IoCaretDownOutline />
              </button>
            </div>
          </div>

          {/* images for mid and large devices */}

          <div className="hidden md:block lg:flex lg:gap-5 lg:justify-center lg:items-center lg:px-2  ">
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

      {/* -----the sticky divs----- */}

      <div className=" h-screen w-full absolute flex justify-between ">
        {/* lines & buttons---- */}
        <div className=" bg-white md:pl-20 lg:w-[61.2%] md:w-[87.9%] w-[90%] sticky top-[60px]  z-10 md:h-[102px] h-[93px]  ">
          <div className="h-[0.5px] opacity-30 bg-black my-[18px] "></div>

          <div className="font-semibold text-sm flex gap-3 transition-all px-1 md:gap-8 md:text-xl  ">
            <a
              href="#desc"
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

          <div className="h-[0.5px] opacity-30 bg-black my-[18px] l shadow-xl "></div>
        </div>
        {/* lines & buttons end ---- */}

        {/* sticky div for room selection */}

        <div
          ref={ref}
          className="hidden lg:block mt-7 pt-5 mr-12 sticky top-[140px] z-10 w-[30%]
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
          className=" hidden sticky top-[140px] mt-7 pt-5 mr-12 z-10 w-[30%]
         h-[320px] border-[0.2px] border-zinc-300 bg-white rounded-md shadow-md shadow-[#bab9c6] "
        >
          <div className=" border-b px-4">
            <h1 className="font-semibold text-lg ">NPR500.00</h1>
          </div>
          <div className="flex justify-between border-b px-4 " >
            <p className="pt-5 text-sm ">test product</p>
            <p className="pt-5 text-sm ">NPR500.00</p>
          </div>
          <div className="flex justify-between border-b px-4 " >
            <p className="pt-5 text-sm ">Total</p>
            <p className="pt-5 text-sm ">NPR500.00</p>
          </div>
        </div>
      </div>
      {/* -----the sticky divs----- end */}

      <body className="lg:w-[75%] ">
        {/* img & description */}
        <div className="md:px-20 pt-24 md:pt-28 ">
          <img
            className=" absolute scale-[0.17] -left-[89px] top-[25px]
            md:-left-[10px] md:top-[27px] md:pt-3  md:scale-[0.2]"
            src="https://dmttourism.com/images/default-profile.png"
            alt=""
          />
          <div id="desc" className="mt-[90px] flex flex-col gap-3  ">
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
              className=" bg-[#F4F4F4] border-[#9427F7] border h-auto w-[90%] md:h-[310px] p-4
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
              className=" bg-[#F4F4F4] border-[#9427F7] border h-auto w-[90%] md:h-[310px] p-4
            rounded-md px-3 text-sm flex flex-col gap-2 "
            >
              <img
                className="object-cover w-full h-[200px] rounded-md md:h-[140px] "
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
      </body>
    </div>
  );
};

export default StaysDetails;
