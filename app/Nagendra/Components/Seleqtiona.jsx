"use client";
import React, { useState } from "react";

const menuItems = [
  {
    id: 0,
    title: "SLICES IN",
    title2: "TIME",
    description:
      "Hotels that have a strong legacy and evoke resounding stories.",
    image: "/images/RK entrance copy 1.png",
  },
  {
    id: 1,
    title: "IDEAS OF",
    title2: "LOCATION",
    description:
      "Hotels that have a unique character emanating from their location or city",
    image: "/images/308.7 1.png",
  },
  {
    id: 2,
    title: "PLAY OF",
    title2: "THEMES",
    description:
      "Hotels that embody a theme or an idea that is central to their definition and experiences.",
    image: "/images/Spa 016.png",
  },
  {
    id: 3,
    title: "SLICES IN",
    title2: "TIME",
    description:
      "Hotels that have a strong legacy and evoke resounding stories.",
    image: "/images/RK entrance copy 1.png",
  },
  {
    id: 4,
    title: "IDEAS OF",
    title2: "LOCATION",
    description:
      "Hotels that have a unique character emanating from their location or city",
    image: "/images/308.7 1.png",
  },
  {
    id: 5,
    title: "PLAY OF",
    title2: "THEMES",
    description:
      "Hotels that embody a theme or an idea that is central to their definition and experiences.",
    image: "/images/Spa 016.png",
  },
];

function Seleqtiona() {
  const [hoveredPair, setHoveredPair] = useState(null);

  const handleMouseEnter = (id) => {
    if (id === 0 || id === 3) {
      setHoveredPair([0, 3]);
    } else if (id === 1 || id === 4) {
      setHoveredPair([1, 4]);
    } else if (id === 2 || id === 5) {
      setHoveredPair([2, 5]);
    }
  };

  const handleMouseLeave = () => {
    setHoveredPair(null);
  };

  return (
    <div className="w-[1520px] h-[720px] bg-amber-700 p-8">
      <div className="grid grid-cols-3 gap-[0.5px] max-w-6xl mx-auto">
        {menuItems.map((item, index) => (
          <div
            key={item.id}
            className="bg-white overflow-hidden transition-all group"
            onMouseEnter={() => handleMouseEnter(item.id)}
            onMouseLeave={handleMouseLeave}
          >
            <div
              className={`transform transition-transform duration-700 scale-115 ${
                hoveredPair && hoveredPair.includes(item.id)
                  ? "flex flex-col"
                  : "flex flex-col-reverse"
              }`}
            >
              <div className="h-1/2 transition-transform duration-700 group-hover:scale-110">
                {index % 2 === 0 ? (
                  <img
                    src={item.image}
                    alt="image"
                    className={`w-full h-[280px] object-cover transition-transform duration-700 ${
                      hoveredPair && hoveredPair.includes(item.id)
                        ? "scale-110"
                        : ""
                    }`}
                  />
                ) : (
                  <div className="flex flex-col justify-center items-center h-1/2 p-16 gap-5">
                    <h2
                      className={`text-xl text-gray-600 w-[503.65px] h-7 gap-11 tracking-widest mb-4 font-light text-center transition-transform duration-700 ${
                        hoveredPair && hoveredPair.includes(item.id)
                          ? "scale-110 translate-y-[-10px]"
                          : ""
                      }`}
                    >
                      {item.title} <br />
                      <span className="font-bold">{item.title2}</span>
                    </h2>
                    <p
                      className={`mt-4  text-gray-600 text-center text-sm opacity- transition-all duration-700 ${
                        hoveredPair && hoveredPair.includes(item.id)
                          ? "opacity-100 scale-110 translate-y-[-10px]"
                          : "opacity-0"
                      }`}
                    >
                      {item.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Seleqtiona;
