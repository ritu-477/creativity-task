import React from "react";
import { ReactTyped } from "react-typed";
const TextWithImage = () => {

  return (
    <div className="flex justify-center items-center bg-gray-500 h-screen flex-col">
      <h1 className="text-7xl mb-10">Text With Image And Typewriter Effect</h1>
      <h2 className="text-8xl font-extrabold bg-clip-text text-transparent pt-10 bg-cover bg-center bg-india-flag">
        <ReactTyped
          strings={["INDIA"]} 
          typeSpeed={150} 
          backSpeed={50} 
          backDelay={1000} 
          loop={true} 
        />
      </h2>
    </div>
  );
};

export default TextWithImage;
