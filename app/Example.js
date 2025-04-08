"use client";
import React, { useState } from "react";
const boxData = [
  {
    title: "TIMELESS",
    description:
      "Embrace a timeless elegance that embodies sophistication and an unwavering commitment to refined excellence.",
    bgImage:
      "url(https://images.deccanherald.com/deccanherald%2F2023-11%2F0985bf0b-c0ed-4622-a341-76f7e9e74201%2FSalaar.jpeg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.3)",
  },
  {
    title: "ICONIC",
    description:
      "Indulge in enduring distinction, extraordinary experiences, and a legacy of unparalleled hospitality.",
    bgImage:
      "url(https://cdn.sanity.io/images/ocl5w36p/prod2/69c78b5b1cdad4d5b0aa121cdc1b2a7d17abf5d1-1920x660.jpg?w=1024&fm=webp&dpr=2)",
  },
  {
    title: "AUTHENTIC",
    description:
      "Dive into a legacy of impeccable service where true refinement unfolds in every moment of your stay.",
    bgImage:
      "url(https://survi.in/wp-content/uploads/2022/03/Survireviews-scaled-e1648179878787.jpg)",
  },
  {
    title: "SOULFUL",
    description:
      "Cultivate cherished memories and embrace a distinctive sense of belonging through personalised, immersive experiences.",
    bgImage:
      "url(https://cdn.sanity.io/images/ocl5w36p/prod2/42976ade3cf8c6515079fa94a09e47d47c2c44c8-2937x2000.jpg?w=768&fm=webp&dpr=2)",
  },
];
const Example = () => {
  const [hoveredIndex, setHoveredIndex] = useState(-1);
  const [bg, setBg] = useState(boxData?.[0]?.bgImage);

  return (
    < div className="box-border mb-0">
    <div className="flex flex-wrap w-full h-auto  justify-center items-center bg-cover bg-center min-h-[32.29vw] transition-all box-border"
      style={{
        backgroundImage: bg
      }}
    >
      {boxData.map((box, index) => (
        <div
          key={index}
          className={` flex flex-row items-end justify-center sm:w-1/2 md:w-1/4 p-7 transition-opacity duration-300 box-border m-0  cursor-default border-r
             border-white sm:flex-[0_0_25%] sm:max-w-[25%] basis-1/4 flex-grow-0 max-w-[25%] ${
            // hoveredIndex === -1 || hoveredIndex === index
            //   ? "opacity-100" 
            //   : "opacity-0"
            ""
          }`}
          onMouseEnter={() => {setBg(box?.bgImage),setHoveredIndex(index)}}
          onMouseLeave={() => setHoveredIndex(0)}
        >
         { hoveredIndex!==index&&<h2
            className={`m-0 font-normal text-black text-[1.67vw] leading-[1.82vw] font-cinzel uppercase tracking-[-0.05em] mt-96 mb-5
               flex text-center px-[1.1458vw] ${""
          
            }`}>
            {box.title}
          </h2>}
          {hoveredIndex===index&&
          <div
            className={`relative p-60  ease-in-out 
              w-full h-full flex flex-col items-center justify-center text-center bg-white opacity-85 px-[2.125vw] transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)]${
              hoveredIndex === index
                ? "scale-105 bg-white bg-opacity-80"
                : "bg-white"
            }`}
          >
            <div
              className={`absolute inset-24 bg-white-500 ${
                hoveredIndex === index ? "opacity-100" : "opacity-0"
              } transition-opacity duration-300`}
            >
           
            <h3 className=" relative m-0 font-normal text-[1.67vw] leading-[1.82vw] font-serif uppercase tracking-[-0.05em] text-[rgb(35,37,39)] ">
              {box.title}
            </h3>
            <span className="text-black-600  relative z-10 mt-[2.083vw] font-light text-[1.14583vw] leading-[1.56vw] font-sans text-[rgb(35,37,39)]">
              {box.description}
            </span>
            </div>
          </div>}
         
           
            </div>
          ))}
        </div>
      </div>
      );
    };
    
    export default Example;





























// "use client";
// import React, { useState } from "react";

// const Example1 = () => {
//   const [hoveredIndex, setHoveredIndex] = useState(null);

//   const boxData = [
//     {
//       title: "TIMELESS",
//       description:
//         "Embrace a timeless elegance that embodies sophistication and an unwavering commitment to refined excellence.",
//       bgImage:
//         "url(https://images.deccanherald.com/deccanherald%2F2023-11%2F0985bf0b-c0ed-4622-a341-76f7e9e74201%2FSalaar.jpeg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.3)",
//     },
//     {
//       title: "ICONIC",
//       description:
//         "Indulge in enduring distinction, extraordinary experiences, and a legacy of unparalleled hospitality.",
//       bgImage:
//         "url(https://cdn.sanity.io/images/ocl5w36p/prod2/69c78b5b1cdad4d5b0aa121cdc1b2a7d17abf5d1-1920x660.jpg?w=1024&fm=webp&dpr=2)",
//     },
//     {
//       title: "AUTHENTIC",
//       description:
//         "Dive into a legacy of impeccable service where true refinement unfolds in every moment of your stay.",
//       bgImage:
//         "url(https://survi.in/wp-content/uploads/2022/03/Survireviews-scaled-e1648179878787.jpg)",
//     },
//     {
//       title: "SOULFUL",
//       description:
//         "Cultivate cherished memories and embrace a distinctive sense of belonging through personalised, immersive experiences.",
//       bgImage:
//         "url(https://cdn.sanity.io/images/ocl5w36p/prod2/42976ade3cf8c6515079fa94a09e47d47c2c44c8-2937x2000.jpg?w=768&fm=webp&dpr=2)",
//     },
//   ];

//   return (
//     <div className="box-border mb-0">
//       <div
//         className="flex flex-wrap w-full justify-center items-center bg-cover bg-center min-h-[32.29vw] transition-all box-border"
//         style={{
//           backgroundImage:
//             hoveredIndex !== null ? boxData[hoveredIndex].bgImage : "none",
//         }}
//       >
//         {boxData.map((box, index) => (
//           <div
//             key={index}
//             className={`flex flex-row items-end justify-center sm:w-1/2 md:w-1/4 p-7 transition-opacity duration-300 box-border m-0 cursor-default border-r border-white sm:flex-[0_0_25%] sm:max-w-[25%] basis-1/4 flex-grow-0 max-w-[25%] ${
//               hoveredIndex === index ? "opacity-0" : "opacity-100"
//             }`}
//             onMouseEnter={() => setHoveredIndex(index)}
//             onMouseLeave={() => setHoveredIndex(null)}
//           >
//             <div
//               className={`relative p-10 ease-in-out w-full h-full flex flex-col items-center justify-center text-center bg-white opacity-85 px-[2.125vw] transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4,_0,_0.2,_1)]`}
//             >
//               <div
//                 className={`absolute inset-0 bg-white-500 ${
//                   hoveredIndex === index ? "opacity-0" : "opacity-100"
//                 } transition-opacity duration-300`}
//               ></div>

//               <h3 className="relative m-0 font-normal text-[1.67vw] leading-[1.82vw] font-serif uppercase tracking-[-0.05em] text-[rgb(35,37,39)]">
//                 {box.title}
//               </h3>
//               <span className="text-black-600 relative z-10 mt-[2.083vw] font-light text-[1.14583vw] leading-[1.56vw] font-sans text-[rgb(35,37,39)]">
//                 {box.description}
//               </span>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Example1;
