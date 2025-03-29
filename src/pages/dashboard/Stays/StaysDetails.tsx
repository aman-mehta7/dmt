import { FaLocationDot } from "react-icons/fa6";
import { IoCaretDownOutline } from "react-icons/io5";
import { LuShare } from "react-icons/lu";
import { FaAngleDown } from "react-icons/fa6";
import { FaCheck } from "react-icons/fa";
import { useState } from "react";

const StaysDetails = () => {
  const [count, setCount] = useState(false);
  return (
    <div className=" overflow-hidden p-6 ">
      <header>
        <div className="flex justify-between">
          <div>
            <h1 className="text-xl font-semibold ">Test</h1>
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

        <div className="hidden md:block ">
          <div>
            <img
              className="w-full h-[400px] rounded-md object-cover mt-5 "
              src="https://dmttourism.com/images/property/13/1740383146_promoted1.jpeg"
              alt=""
            />
          </div>
          <div></div>
        </div>

        {/* images for mid and large devices--end-- */}

        {/* lines & buttons---- */}
        <div className="md:px-20  ">
          <div className="h-[0.5px] opacity-30 bg-black my-[18px] "></div>

          <div className="font-semibold flex gap-5 transition-all px-1 md:gap-8 md:text-xl ">
            <a
              href="#desc"
              className="hover:text-[#9427F7] border p-2 rounded-xl "
            >
              Details
            </a>
            <a
              href="#room"
              className="hover:text-[#9427F7] border p-2 rounded-xl"
            >
              Room
            </a>
            <a
              href="#info"
              className="hover:text-[#9427F7] border p-2 rounded-xl"
            >
              Info
            </a>
            <a
              href="#reviews"
              className="hover:text-[#9427F7] border p-2 rounded-xl"
            >
              Reviews
            </a>
          </div>

          <div className="h-[0.5px] opacity-30 bg-black my-[18px] "></div>
        </div>
        {/* lines & buttons end ---- */}
      </header>

      <body>
        {/* img & description */}
        <div className="md:px-20">
          <img
            className=" absolute scale-[0.17] -left-[89px] -top-[90px]
            md:left-[1px] md:-top-[70px] md:scale-[0.27]"
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
              className=" bg-[#F4F4F4] border-[#9427F7] border h-auto w-[90%] p-4
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
              className=" bg-[#F4F4F4] border-[#9427F7] border h-auto w-[90%] p-4
            rounded-md px-3 text-sm flex flex-col gap-2 "
            >
              <img
                className="object-cover w-full h-[200px] rounded-md "
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
                {!count ? (
                  <button
                    onClick={() => {
                      {
                        count ? setCount(false) : setCount(true);
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
