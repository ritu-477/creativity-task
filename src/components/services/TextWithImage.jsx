import React from "react";
import { ReactTyped } from "react-typed";
const TextWithImage = () => {

  return (
    <div className="flex justify-center items-center bg-gray-500 h-screen flex-col">
      <div className="container mx-auto">
        <h1 className="lg:text-6xl text-4xl mb-5 lg:mb-10 text-center">Text With Image And Typewriter Effect</h1>
        <h2 className="text-8xl text-center font-extrabold bg-clip-text text-transparent pt-10 bg-no-repeat bg-cover bg-center bg-india-flag">
          <ReactTyped
            className="text-center"
            strings={["INDIA"]}
            typeSpeed={150}
            backSpeed={50}
            backDelay={1000}
            loop={true}
          />
        </h2>
     </div>
    </div>
  );
};

export default TextWithImage;
