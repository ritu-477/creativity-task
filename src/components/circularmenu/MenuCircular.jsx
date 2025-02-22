import React, { useState } from "react";
import { MENU_ITEMS } from "../../utils/helper";

const MenuCircular = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-screen bg-black flex items-center justify-center flex-col container">
      <h2 className="xl:text-6xl lg:text-5xl sm:text-4xl text-3xl text-white mb-28 text-center font-semibold">
        Circular Menu
      </h2>
      <div className="relative flex items-center justify-center">
        <button
          className="size-16 bg-blue-500 text-white flex items-center justify-center rounded-full fixed cursor-pointer"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "x" : "☰"}
        </button>
        {isOpen && (
          <div className="absolute flex flex-col items-center gap-4">
            {MENU_ITEMS.map((obj, index) => (
              <a key={obj.index} href={obj.link} className={`menu-item item-${index}`}>
                {obj.icon}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuCircular;
