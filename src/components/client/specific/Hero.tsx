import { ClientContainer } from "../..";
import Filter from "./Filter";

const Hero = () => {
  return (
    <div
      className={`relative w-full py-20 md:py:0 md:h-[652px] flex justify-center`}
    >
      <ClientContainer>
        <div
          className={`h-full w-full md:max-w-7xl flex flex-col justify-center md:px-7`}
        >
          <div className={`max-w-[32ch] sm:max-w-[40ch] md:max-w-full`}>
            <h2
              className={`text-dark-blue font-bold md:font-semibold text-3xl sm:text-4xl md:text-5xl mb-4 md:mb-3`}
            >
              Explore the best Nepal has to offer.
            </h2>
            <span className={`text-dark-blue text-md font-semibold`}>
              Enjoy discounts and travel rewards at hundreds of hotels, and
              excersions worldwide
            </span>
          </div>
          <Filter />
        </div>
      </ClientContainer>
    </div>
  );
};

export default Hero;
