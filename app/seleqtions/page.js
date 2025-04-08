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

function page1() {
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
    <div className="min-h-screen bg-amber-700 p-8">
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

export default page1;

// "use client";
// import React from "react";

// const menuItems = [
//   {
//     id: "0",
//     title: "SLICES IN",
//     title2: "TIME",
//     description:
//       "Hotels that have a strong legacy and evoke resounding stories.",
//     image: "/images/RK entrance copy 1.png",
//   },
//   {
//     id: "1",
//     title: "IDEAS OF",
//     title2: "LOCATION",
//     description:
//       "Hotels that have a unique character emanating from their location or city.",
//     image: "/images/308.7 1.png",
//   },
//   {
//     id: "2",
//     title: "PLAY OF",
//     title2: "THEMES",
//     description:
//       "Hotels that embody a theme or an idea, that is central to their definition and experiences.",
//     image: "/images/Spa 016.png",
//   },
// ];

// function Page() {
//   return (
//     <div className="min-h-screen bg-amber-700 p-8">
//       <div className="grid grid-cols-3 gap-[0.5px] h-[518px] max-w-6xl mx-auto">
//         {menuItems.map((item, index) => (
//           <div
//             key={item.id}
//             className={`bg-white gap-7 overflow-hidden transition-all group ${
//               index % 2 === 0 ? "flex flex-col" : "flex flex-col-reverse"
//             }`}
//           >
//             <div className="h-1/2 transition-transform duration-700 group-hover:scale-110">
//               <img
//                 src={item.image}
//                 alt="Image"
//                 className="w-full h-64 object-cover"
//               />
//             </div>

//             <div className="flex flex-col justify-center items-center h-1/2 p-8 gap-4">
//               <h2 className="text-xl w-[503.65px] h-12 gap-3 group-hover:translate-y-[-20px] font-light text-center transition-transform duration-700 group-hover:scale-110">
//                 {item.title} <br />
//                 <span className="font-bold">{item.title2}</span>
//               </h2>
//               <p className="mt-4 text-gray-600 text-center text-sm opacity-0  translate-y-[0px] transition-all group-hover:opacity-100 group-hover:translate-y-[-15px]  duration-700 group-hover:scale-110">
//                 {item.description}
//               </p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page;

// "use client";
// import React, { useState } from "react";

// const menuItems = [
//   {
//     id: 0,
//     title: "SLICES IN",
//     title2: "TIME",
//     description:
//       "Hotels that have a strong legacy and evoke resounding stories.",
//     image: "/images/RK entrance copy 1.png",
//   },
//   {
//     id: 1,
//     title: "IDEAS OF",
//     title2: "LOCATION",
//     description:
//       "Hotels that have a unique character emanating from their location or city",
//     image: "/images/308.7 1.png",
//   },
//   {
//     id: 2,
//     title: "PLAY OF",
//     title2: "THEMES",
//     description:
//       "Hotels that embody a theme or an idea that is central to their definition and experiences.",
//     image: "/images/Spa 016.png",
//   },
//   {
//     id: 3,
//     title: "SLICES IN",
//     title2: "TIME",
//     description:
//       "Hotels that have a strong legacy and evoke resounding stories.",
//     image: "/images/RK entrance copy 1.png",
//   },
//   {
//     id: 4,
//     title: "IDEAS OF",
//     title2: "LOCATION",
//     description:
//       "Hotels that have a unique character emanating from their location or city",
//     image: "/images/308.7 1.png",
//   },
//   {
//     id: 5,
//     title: "PLAY OF",
//     title2: "THEMES",
//     description:
//       "Hotels that embody a theme or an idea that is central to their definition and experiences.",
//     image: "/images/Spa 016.png",
//   },
// ];

// function Page() {
//   const [hoveredId, setHoveredId] = useState(null);

//   return (
//     <div className="min-h-screen bg-amber-700 p-8">
//       <div className="grid grid-cols-3 gap-[0.5px]  max-w-6xl mx-auto">
//         {menuItems.map((item, index) => (
//           <div
//             key={item.id}
//             className="bg-white overflow-hidden transition-all group"
//             onMouseEnter={() => setHoveredId(item.id % 3)}
//             onMouseLeave={() => setHoveredId(null)}
//           >
//             <div
//               className={`transform transition-transform duration-700 scale-105 ${
//                 hoveredId === item.id % 3
//                   ? "flex flex-col"
//                   : "flex flex-col-reverse"
//               }`}
//             >
//               <div className=" h-1/2 transition-transform duration-700 group-hover:scale-110">
//                 {index % 2 === 0 ? (
//                   <img
//                     src={item.image}
//                     alt="image"
//                     className="w-full h-1/2 object-cover"
//                   />
//                 ) : (
//                   <div className="flex flex-col justify-center items-center h-1/2 p-8 gap-4">
//                     <h2 className="text-xl w-[503.65px] h-12 gap-3 group-hover:translate-y-[-10px] font-light text-center transition-transform duration-700 group-hover:scale-110">
//                       {item.title} <br />
//                       <span className="font-bold">{item.title2}</span>
//                     </h2>
//                     <p className="mt-2 text-gray-600 text-center text-sm opacity-0  translate-y-[0px] transition-all group-hover:opacity-100 group-hover:translate-y-[-10px]  duration-700 group-hover:scale-110">
//                       {item.description}
//                     </p>
//                   </div>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page;
