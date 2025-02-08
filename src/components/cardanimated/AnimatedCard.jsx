import React from "react";
import { CARD_DATA } from "../../utils/helper";

const AnimatedCard = () => {
  return (
    <div className="container max-w-[1240px] mx-auto lg:h-screen flex justify-center items-center flex-col py-10">
      <h2 className="lg:text-6xl text-black text-4xl mb-8 lg:mb-10 text-center">
        Animated Gradient Card With Keyframe</h2>
      <div className="flex lg:flex-row flex-wrap gap-5 w-full justify-center">
        {CARD_DATA.map((obj) => (
          <div key={obj.index} className="max-w-[300px] w-full hover:scale-105 duration-300 transition-all">
            <div className="relative flex sm:h-[300px] h-[200px] w-full flex-col items-center justify-center overflow-hidden rounded-lg md:shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-[length:200%_200%] animate-border"></div>
              <span className="relative z-10 text-3xl text-center font-semibold leading-none text-black">
                {obj.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AnimatedCard;