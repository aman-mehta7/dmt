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
  const goodToKnow = [
    {
      title: "Children",
      description: "Childern are welcome at this hotel.",
      icons: [],
    },
    {
      title: "Pets",
      description: "No pets policy avilable.",
      icons: [],
    },
    {
      title: "Breakfast",
      description: "	6am to 8am",
      icons: [],
    },
    {
      title: "Extra bed",
      description: "	Child - free, Adult - Charges Apply",
      icons: [],
    },
    {
      title: "Accepts payment methods",
      description: "The hotel accepts the following payment methods",
      icons: [],
    },
    {
      title: "Property Policy",
      description: "	No property policies available",
      icons: [],
    },
    {
      title: "Platform Policy",
      description: "	No description available.",
      icons: [],
    },
    {
      title: "Refundable",
      description: "	No refundable information",
      icons: [],
    },
    {
      title: "Non Refundable",
      description: "No non refundable information",
      icons: [],
    },
    {
      title: "Important information",
      description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tenetur esse enim, quo illo optio veritatis facilis accusamus. Tempore iusto odio sequi quidem natus aspernatur laboriosam aut itaque minima enim. Magnam repellat esse accusantium mollitia sunt qui illo iure excepturi? Dicta animi sequi, praesentium et nemo beatae qui obcaecati eos. Magni sapiente repudiandae, fugiat eligendi neque animi molestiae provident? Animi dolores ut mollitia distinctio est perspiciatis. ",
      icons: [],
    },
  ];
  
  const amenities = [
    {
      icon: "" ,
      title: "Internet",
    },
    {
      icon: <BiDumbbell /> ,
      title: "Gym",
    },
    {
      icon: <GrElevator />,
      title: "Elevator in Building",
    },
    {
      icon:     <MdOutlineFireplace />,
      title: "    Indoor Fireplace",
    },
    {
      icon: "",
      title: "  Buzzer/Wireless Intercom",
    },
    {
      icon: "",
      title: "  Doorman",
    },
    {
      icon: "",
      title: "  Shampoo",
    },
    {
      icon:   <IoIosWifi />,
      title: "Wireless Internet",
    },
    {
      icon: <LiaHotTubSolid />,
      title: "Hot Tub",
    },
    {
      icon: <BiSolidWasher />,
      title: "Washer",
    },
    {
      icon: <MdOutlinePool />,
      title: "Pool",
    },
    {
      icon: <BiSolidDryer />,
      title: " Dryer",
    },
    {
      icon: <PiBowlSteamBold />,
      title: " Breakfast",
    },
    {
      icon:  <RiParkingBoxLine /> ,
      title: "  Free Parking on Premises",
    },
    {
      icon: <MdOutlineFamilyRestroom /> ,
      title: " Family/Kid Friendly",
    },
    {
      icon: <FaSmoking />,
      title: "Smoking Allowed",
    },
    {
      icon:   <BsBalloonFill />,
      title: "  Suitable for Events",
    },
    {
      icon:  <MdPets /> ,
      title: "  Pets Allowed",
    },
    {
      icon: "",
      title: "Pets live on this property",
    },
    {
      icon: <BiHandicap /> ,
      title: " Wheelchair Accessible",
    },
    {
      icon:  <FaRegCircleCheck /> ,
      title: "  Smoke Detector",
    },
    {
      icon:  <FaRegCircleCheck /> ,
      title: "Carbon Monoxide Detector",
    },
    {
      icon:  <FaRegCircleCheck /> ,
      title: " First Aid Kit",
    },
    {
      icon:  <FaRegCircleCheck /> ,
      title: " Safety Card",
    },
    {
      icon:  <FaRegCircleCheck /> ,
      title: "Fire Extinguisher",
    },

  ];


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

      <div className=" lg:h-[135rem] h-[165rem] w-full md:px-16 absolute top-36 left-5 md:top-[1020px] lg:top-[600px] flex justify-between mt-6 ">
        {/*sticky nav bar*/}
        <div className=" bg-white place-content-center  md:pl-20 lg:w-[68%] md:w-[95%] border-zinc-300 w-[91%] sticky top-[60px]  z-50  md:h-[102px] h-[93px] border-b border-t ">
          <div className="font-semibold text-sm flex gap-2 transition-all md:gap-8 md:text-xl  ">
            <a
              href="#description"
              className="hover:text-[#9427F7] border-[0.2px] border-zinc-300 l shadow-md shadow-[#bab9c6]  p-2 rounded-xl "
            >
              Details
            </a>
            <a
              href="#rooms"
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
        {/* sticky nav bar end*/}

        {/* sticky div for booking */}

        <div
          ref={ref}
          className="hidden lg:block max-w-[400px] mt-7 pt-5 sticky z-50 top-[140px] w-[30%]
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
          className=" hidden sticky top-[140px] max-w-[350px] mt-7 pt-5 z-10 w-[30%]
         h-[330px] border-[0.2px] border-zinc-300 bg-white rounded-md shadow-md shadow-[#bab9c6] "
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
      {/* sticky div for booking end */}

      {/* -----the sticky divs----- end */}

      <div className=" md:mx-12 mx-6 parent-div relative py-6 overflow-hidden ">
        <header>
          <div>
            {/* share button div */}
            <div className="flex justify-between lg:mx-20 ">
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
               bg-zinc-100 border border-[#ebd5ff] text-[13px] md:text-sm text-nowrap right-5 md:right-9 "
                >
                  <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                    <a href="https://facebook.com">share on Facebook</a>
                  </li>
                  <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                    <a href="https://x.com">share on Twitter</a>
                  </li>
                  <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                    <a href="https://linkedin.com">share on Linkedin</a>
                  </li>
                  <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                    <a href="https://whatsapp.com">share on Whatsapp</a>
                  </li>
                  <li className=" hover:bg-[#BA92E9] p-1 px-2 hover:text-white ">
                    <a href="https://email.com">share on Email</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* share button div end */}

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
              className=" absolute scale-[0.17] -left-[89px] top-[40px]
            md:-left-[9px] md:top-[49px] md:pt-3  md:scale-[0.2]"
              src="https://dmttourism.com/images/default-profile.png"
              alt=""
            />
            <div
              id="description"
              className="md:-mt-[90px] pt-44 -mt-[90px] md:pt-48 flex flex-col gap-3  "
            >
              <h1 className="text-xl font-semibold md:text-2xl ">
                Description
              </h1>
              <p className="w-[90%] opacity-70">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse
                amet at, quam enim repellendus numquam harum aperiam debitis a
                sapiente?
              </p>
            </div>
          </div>
          {/* img & description end */}

          {/* -----card1----- */}
          <div
            id="rooms"
            className="card-wrapper -mt-36 pt-36 md:-mt-40 md:pt-40 md:px-20 md:pr-24"
          >
            <h1 className="text-xl font-semibold md:text-3xl pt-9 ">
              Choose your room
            </h1>
            <div className="flex flex-col gap-3 mt-5 md:flex-row md:gap-5 md:w-[95%] ">
              <div
                className=" bg-[#F4F4F4] border-[#9427F7] border h-auto max-w-[520px] w-[90%] lg:w-[85%] md:w-[80%] md:h-[310px] p-4 xl:h-[410px]
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
                className=" bg-[#F4F4F4] border-[#9427F7] border max-w-[520px] h-auto w-[90%] lg:w-[85%] md:w-[80%] md:h-[310px] xl:h-[410px] p-4
            rounded-md px-3 text-sm flex flex-col gap-2 "
              >
                <img
                  className="object-cover w-full h-[200px] rounded-md md:h-[140px] xl:h-[220px] "
                  src="https://dmttourism.com/images/property/13/1740383146_promoted1.jpeg"
                  alt=""
                />
                <h1 className="text-[16px] font-semibold pt-2 ">
                  test product
                </h1>
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
            {amenities.map((items,index) => (
              <h1  key={index} >
                {items.icon}
                {items.title}
              </h1>
              ))}
            </div>
          </div>
          {/* Amenities ( Public Area ) end */}

          {/* Reviews */}
          <div
            id="reviews"
            className=" pt-36 -mt-36 md:pt-40 md:-mt-40 md:px-20"
          >
            <h1 className=" text-xl font-semibold md:text-3xl pt-9 ">
              Rewiews
            </h1>
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
          <div
            id="info"
            className="  pt-36 -mt-36 md:pt-40 md:-mt-40 md:px-20 w-[90%] overflow-hidden text-wrap "
          >
            <h1 className=" text-xl font-semibold md:text-3xl pt-9 ">
              Policies
            </h1>
            <h1 className=" font-semibold pt-2 ">Good To Know</h1>
          </div>
          {goodToKnow.map((item, index) => (
            <div className="md:px-20 mr-[50px] text-wrap overflow-hidden ">
              <div className=" grid grid-cols-2  border-b border-zinc-300 px-4">
                <p key={index} className="py-2 text-sm ">
                  {item.title}
                </p>
                <p className="py-2 text-sm ">{item.description}</p>
              </div>
            </div>
          ))}
          {/* Policies end */}

          <div className="md:px-20 w-[80%] ">
            <h1 className=" font-semibold pt-8 px-4 ">
              Check in and check out
            </h1>
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

        <div className="block lg:hidden mt-5 ">
          <div
            className={
              count ? `w-full h-[120px] mt-5  ` : `w-full h-[320px] mt-5 pl- `
            }
          >
            {count ? (
              <div
                className="block md:block lg:hidden max-w-[350px] mt-10 pt-5 ml-20 md:ml-28 md:w-[30%] mx-[15%]
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
                className=" block md:block lg:hidden max-w-[350px] mt-10 pt-5 md:ml-28 mx-[15%] md:w-[38%] w-[75%]
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
