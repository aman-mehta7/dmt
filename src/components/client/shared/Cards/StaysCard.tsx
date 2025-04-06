
import { useRef } from "react";
import "../../../../index.css";

const StaysCard = () => {
  const cardProps = [
    {
      title: "Test",
      image:
        "https://dmttourism.com/storage/css/thumbnail_images/UD3CmjAMxqYJNjVRs0260yfyiwWYUOAg0AOSStjb.jpg",
      location: "Stays in विराटनगर,Nepal",
    },
    {
      title: "Test",
      image:
        "https://dmttourism.com/storage/css/thumbnail_images/UD3CmjAMxqYJNjVRs0260yfyiwWYUOAg0AOSStjb.jpg",
      location: "Stays in विराटनगर,Nepal",
    },
    {
      title: "Test",
      image:
        "https://dmttourism.com/storage/css/thumbnail_images/UD3CmjAMxqYJNjVRs0260yfyiwWYUOAg0AOSStjb.jpg",
      location: "Stays in विराटनगर,Nepal",
    },
    {
      title: "Test",
      image:
        "https://dmttourism.com/storage/css/thumbnail_images/UD3CmjAMxqYJNjVRs0260yfyiwWYUOAg0AOSStjb.jpg",
      location: "Stays in विराटनगर,Nepal",
    },
  ];


  return (
    <div className="flex items-center justify-between gap-60 mt-20 w-[90vw] overflow-hidden ">
      <h1 className="font-bold text-5xl">Promoted by DMT.</h1>

      <div
        className=" relative flex scroll  items-center justify-center gap-5 pl-56 overflow-x-auto select-none "
      >
        {cardProps.map((item, i) => (
          <a href="http://localhost:5173/stays/64" key={i}>
              <img
                className="object-cover rounded-md min-w-[300px] select-none  "
                src={item.image}
                alt=""
              />
            <h1 className="mt-2 text-[#9427F7] ">{item.title}</h1>
            <p className="mt-1">{item.location}</p>
          </a>
        ))}
      </div>

    </div>
  );
};

export default StaysCard;
