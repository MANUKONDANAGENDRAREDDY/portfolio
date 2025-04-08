import React from "react";

function FourTask() {
  return (
    <div className="MuiBox-root">
      <div
        className="grid gap-0 md:grid-cols-4 sm:grid-cols-2 "
        aria-label="card-with-hover"
      >
        <div
          className=" relative box-border flex flex-wrap w-full min-h-[32.29vw] bg-center bg-cover bg-no-repeat bg-gray-900 transition-all ease-in-out delay-0 duration-[600ms] hover:scale-110"
          style={{
            backgroundImage:
              "url('https://images.deccanherald.com/deccanherald%2F2023-11%2F0985bf0b-c0ed-4622-a341-76f7e9e74201%2FSalaar.jpeg?auto=format%2Ccompress&fmt=webp&fit=max&format=webp&q=70&w=900&dpr=1.3')",
          }}
        ></div>
        <div
          className=" relative box-border flex flex-wrap w-full min-h-[32.29vw] bg-center bg-cover bg-no-repeat bg-gray-900 transition-all ease-in-out delay-0 duration-[600ms]"
          style={{
            backgroundImage:
              "url('https://jaisw-media-en-bucket.s3.ap-south-1.amazonaws.com/en/uploads/2024/01/12115239/Guntur-Kaaram-movie-review-and-rating-400x225.jpg')",
          }}
        ></div>
        <div
          className=" relative box-border flex flex-wrap w-full min-h-[32.29vw] bg-center bg-cover bg-no-repeat bg-gray-900 transition-all ease-in-out delay-0 duration-[600ms]"
          style={{
            backgroundImage:
              "url('https://survi.in/wp-content/uploads/2022/03/Survireviews-scaled-e1648179878787.jpg')",
          }}
        ></div>
        <div
          className=" relative box-border flex flex-wrap w-full min-h-[32.29vw] bg-center bg-cover bg-no-repeat bg-gray-900 transition-all ease-in-out delay-0 duration-[600ms]"
          style={{
            backgroundImage:
              "url('https://img.etimg.com/thumb/msid-113661381,width-650,height-488,imgsize-2416260,resizemode-75/saripodhaa-sanivaaram-poster.jpg')",
          }}
        ></div>
      </div>
      <div className=" absolute flex flex-row h-auto items-end justify-center cursor-default border-r border-white min-w-900px">
        <div className="opacity-100 transition-opacity duration-[1000ms] ease-in-out">
          <h3 className="text-heading-s">TIMELESS</h3>
          <span className="text-body-ml">
            Embrace a timeless elegance that embodies sophistication and an
            unwavering commitment to refined excellence.
          </span>
        </div>
        <h3 className=" absolute block text-xl my-4 font-bold">TIMELESS</h3>
      </div>
      <div className=" absolute flex flex-row h-auto items-end justify-center cursor-default border-r border-white lg:basis-1/4 lg:flex-grow-0 lg:max-w-1/4">
        <div className="opacity-100 transition-opacity duration-[1000ms] ease-in-out">
          <h3 className="text-heading-s">ICONIC</h3>
          <span className="text-body-ml">
            Indulge in enduring distinction, extraordinary experiences and a
            legacy of unparalleled hospitality.
          </span>
        </div>
        <h3 className="block text-xl my-4 font-bold">ICONIC</h3>
      </div>
      <div className=" absolute flex flex-row h-auto items-end justify-center cursor-default border-r border-white lg:basis-1/4 lg:flex-grow-0 lg:max-w-1/4">
        <div className="opacity-100 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)]">
          <h3 className="text-heading-s">AUTHENTIC</h3>
          <span className="text-body-ml">
            Dive into a legacy of impeccable service where true refinement
            unfolds in every moment of your stay.
          </span>
        </div>
        <h3 className="block text-xl my-4 font-bold">AUTHENTIC</h3>
      </div>
      <div className=" absolute flex flex-row h-auto items-end justify-center cursor-default border-r border-white lg:basis-1/4 lg:flex-grow-0 lg:max-w-1/4">
        <div className="opacity-100 transition-opacity duration-[1000ms] ease-[cubic-bezier(0.4, 0, 0.2, 1)]">
          <h3 className="text-heading-s">SOULFUL</h3>
          <span className="text-body-ml">
            Cultivate cherished memories and embrace a distinctive sense of
            belonging through personalised, immersive experiences.
          </span>
        </div>
        <h3 className="block text-xl my-4 font-bold">SOULFUL</h3>
      </div>
    </div>
  );
}

export default FourTask;

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
//             <div className=" h-1/2transition-transform duration-300 group-hover:scale-105">
//               <img
//                 src={item.image}
//                 alt="Image"
//                 className="w-full h-1/2 object-cover"
//               />

//               <div className="flex flex-col justify-center items-center h-1/2 p-16 top-24 right-8 bottom-24 left-8 gap-2 ">
//                 <h2 className="text-2xl font-light text-center ">
//                   {item.title} <br />
//                   <span className="font-bold">{item.title2}</span>
//                 </h2>
//                 <p className="mt-4 text-gray-600 text-center text-sm opacity-0 transition-opacity duration-300 group-hover:opacity-100">
//                   {item.description}
//                 </p>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Page;

// "use client";
// import { title } from "process";
// import React, { useState } from "react";

// const menuItems = [
//   {
//     id: "0",
//     title: "SLICES IN",
//     title2: "TIME",
//     description:
//       "Hotels that have a storng legacy and evoke resounding stories.",
//     image: "/images/RK entrance copy 1.png",
//   },

//   {
//     id: "1",
//     title: "IDEAS OF",
//     title2: "LOCATION",
//     description:
//       "Hotels that have a unique character emanating form their location or city",
//     image: "/images/308.7 1.png",
//   },
//   {
//     id: "2",
//     title: "PLAY OF",
//     title2: "THEMES",
//     description:
//       "Hotals that embody a theme or an idea,that is central to there definition and experiences.",
//     image: "/images/Spa 016.png",
//   },
// ];

// function page() {
//   return (
//     <div className="min-h-screen bg-amber-700 p-8">
//       <div className="grid grid-cols-3 gap-[0.5px] h-[719px] max-w-6xl mx-auto">
//         {menuItems.map((item, index) => (
//           <div
//             key={item.id}
//             className={`bg-white overflow-hidden bg-[url('/images/RK entrance copy 1.png')] bg-no-repeat bg-right-top transition-transform transform hover:scale-105`}
//           >
//             <img
//               src={item.image}
//               alt="Image for"
//               className="w-full h-1/2 border-spacing-[0.82px] object-cover"
//             />
//             <div className=" flex flex-col justify-center items-center h-1/2">
//               <h2 className="text-2xl font-light text-center">
//                 {item.title} <br />{" "}
//                 <span className="font-bold">{item.title2}</span>
//               </h2>
//               <p className=" mt-4 text-gray-600 text-center text-sm  "></p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// export default page;
