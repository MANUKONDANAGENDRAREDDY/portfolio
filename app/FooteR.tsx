"use client";
import React from "react";

function FooteR() {
  return (
    <React.Fragment>
      {/* <footer className="flex  items-center">
                <h2 className=" flex flex-col flex-wrap  items-center text-white bg-slate-600 h-full w-full top-96 bottom-auto align-middle">Footer section</h2>
            </footer> */}
      <footer className="bg-gray-800 h-full w-full text-white py-6">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <img
            alt="Your Company"
            src="https://dcassetcdn.com/design_img/2859243/585687/585687_15962602_2859243_3c24bcc1_image.jpg"
            className="h-14 w-auto"
          />
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold">MyWebsite</h2>
            <p className="text-gray-400">
              © 2025 MyWebsite. All rights reserved.
            </p>
          </div>
          <div className="text-gray-400">
            <div className="flex items-center justify-center gap-1">
              <img
                src="https://m.economictimes.com/thumb/msid-63994786,width-1200,height-900,resizemode-4,imgsize-35146/gmail-gets-a-makeover-heres-how-you-can-make-the-most-of-its-features.jpg"
                alt="Gmail"
                className="h-5 w-auto"
              />
              <p>Email: roasted@gmile.com</p>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img
                src="https://t4.ftcdn.net/jpg/03/61/06/47/360_F_361064765_RP4yD79gKFMdHiaDmTUWiPES6aoAKPkb.jpg"
                alt="Moblie"
                className="h-5 w-auto"
              />
              <p>Phone: +091 98456 78490</p>
            </div>
          </div>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <a href="#home" className="hover:text-green-300">
                  Home
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-green-300">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-green-300">
                  Services
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-green-300">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <div className="flex items-center justify-center">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/018/930/698/small/facebook-logo-facebook-icon-transparent-free-png.png"
                alt="Facebook"
                className="h-8 w-auto"
              />
              <a href="#" aria-label="Facebook" className="hover:text-blue-500">
                Facebook
              </a>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img
                src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?t=st=1738127988~exp=1738131588~hmac=353b881d4605b21b1270a3270bea11bd7abcc834606591067726ddafc080728f&w=740"
                alt="X Twitter"
                className="h-5 w-auto"
              />
              <a href="#" aria-label="Twitter" className="hover:text-black">
                Twitter
              </a>
            </div>
            <div className="flex items-center justify-center gap-1">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt="instagram"
                className="h-5 w-auto"
              />

              <a
                href="#"
                aria-label="Instagram"
                className="hover:text-pink-500"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>
      </footer>
    </React.Fragment>
  );
}

export default FooteR;
