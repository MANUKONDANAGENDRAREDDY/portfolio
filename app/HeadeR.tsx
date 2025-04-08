"use client";

import Link from "next/link";
import React from "react";
import { useRouter } from "next/navigation";

function HeadeR() {
  const router = useRouter();

  const handlenavigation = (path) => {
    router.push(path);
  };
  return (
    <React.Fragment>
      <nav className="flex w-full  bg-red-300">
        <ul className="flex flex-row flex-wrap w-full h-20 items-center justify-center gap-9 align-middle bg-slate-800 text-zinc-100">
          <div className="flex flex-none items-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <img
                alt="Your Company"
                src="https://dcassetcdn.com/design_img/2859243/585687/585687_15962602_2859243_3c24bcc1_image.jpg"
                className="h-14 w-auto"
              />
            </div>
          </div>
          <li>
            <button
              type="button"
              onClick={() => router.push("/Home")}
              className="hover:text-red-500"
            >
              HOME
            </button>
          </li>
          <li>
            <button
              onClick={() => handlenavigation("/ABOUTUS")}
              className="hover:text-red-500"
            >
              ABOUT US
            </button>
          </li>
          <li>
            <Link href="/contact">
              <span className="hover:text-red-500">CONTACT</span>
            </Link>
          </li>
          <li>
            <Link href="/brands">
              <span className="hover:text-red-500">BRANDS</span>
            </Link>
          </li>
          <li>
            <Link href="/careers">
              <span className="hover:text-red-500">CAREERS</span>
            </Link>
          </li>

          <div className="flex flex-none hover:bg-gray-950 opacity-80 sm:justify-end sm:items-stretch items-center rounded-md bg-red-500">
            <div className="flex items-center h-12 w-32 justify-center rounded-xl">
              <button>BOOK NOW</button>
            </div>
          </div>
        </ul>
      </nav>
    </React.Fragment>
  );
}

export default HeadeR;

// "use client"
// import Link from 'next/link';
// import React from 'react';

// function HeadeR() {
//     return (
//         <React.Fragment>

//             <nav className="flex  w-full  bg-red-300">
//                 <ul className="flex flex-row flex-wrap w-full h-20 items-center justify-center gap-9 align-middle  bg-slate-800  text-zinc-100">
//                 <div className="flex flex-none  items-center sm:items-stretch sm:justify-start">
//               <div className="flex shrink-0 items-center">
//               <img
//                 alt="Your Company"
//                 src="https://dcassetcdn.com/design_img/2859243/585687/585687_15962602_2859243_3c24bcc1_image.jpg"

//                 // src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=500"
//                 className="h-14 w-auto"
//                 />
//                </div>
//                </div>
//                     <li>
//                         <link href='/HOME'>
//                         <a href="#home" className="hover:text-red-500">
//                         HOME
//                         </a>
//                         </link>
//                      </li>
//                     <li>
//                         <link href='/ABOUT US'>
//                       <a href="#ABOUT US" className="hover:text-red-500">
//                         ABOUT US
//                         </a>
//                         </link>
//                       </li>
//                     <li>
//                         <link href='/CONTANT'>
//                     <a href="#CONTACT" className="hover:text-red-500">
//                         CONTACT
//                         </a>
//                         </link>
//                          </li>
//                     <li>
//                         <link href='/BRANDS'>
//                     <a href="#BRANDS" className="hover:text-red-500">
//                         BRANDS
//                         </a>
//                         </link>
//                         </li>

//                     <li>
//                         <link href="/CAREERS">
//                         <a href="#CAREERS" className="hover:text-red-500">
//                         CAREERS
//                         </a>
//                         </link>
//                         </li>
//                     <div className="flex flex-none hover:bg-gray-950 opacity-80 sm:justify-end sm:items-stretch items-center rounded-md bg-red-500">
//                         <div className="flex items-center h-12 w-32 justify-center rounded-xl">
//                         <button >BOOK NOW</button>
//                         </div>
//                     </div>
//                 </ul>
//             </nav>
//         </React.Fragment>
//     );
// }

// export default HeadeR;
