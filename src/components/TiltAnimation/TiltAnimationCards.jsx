import React from "react";
import Tilt from "react-parallax-tilt";
import {TILT_CARDS_DATA} from "../../utils/helper";

const TiltAnimationCards = () => {

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-900 py-12">
     <div className="container mx-auto">
     <h2 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl text-white mb-8 lg:mb-10 text-center font-semibold">
     Tilt Animation Cards</h2>
     <div className="flex flex-wrap gap-5 lg:gap-8 justify-center">
        {TILT_CARDS_DATA.map((obj) => (
          <Tilt
            key={obj}
            glareEnable={true}
            glareMaxOpacity={100}
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            transitionSpeed={1000}
            scale={1.1}
          >
            <div className="size-60 overflow-hidden flex items-center justify-center !cursor-pointer">
              <img src={obj} className="w-full h-full object-cover !pointer-events-none" alt="nature" />
            </div>
          </Tilt>
        ))}
      </div>
     </div>
    </div>
  );
};

export default TiltAnimationCards;
