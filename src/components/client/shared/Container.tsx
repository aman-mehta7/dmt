import { FC, ReactNode } from "react";

interface Props {
  className?: string;
  children: ReactNode;
}

const Container: FC<Props> = ({ className, children }) => {
  return (
    <div
      className={`relative px-4 md:max-w-5xl lg:max-w-5xl xl:max-w-[100rem] mx-auto w-full h-auto ${className}`}
    >
      {children}
      {/* <a href=""><img src="https://dmttourism.com/storage/css/thumbnail_images/UD3CmjAMxqYJNjVRs0260yfyiwWYUOAg0AOSStjb.jpg" alt="" className="
     l  " /></a> */}
    </div>
  );
};

export default Container;
