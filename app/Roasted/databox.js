"use client" 
import React, { useState } from 'react';


const boxData = [
    {
      title : "Pizza",
      description:"The dough forms the foundation of the pizza, and it can be thick or thin depending on the style. The crust is baked until crispy and golden.",
      bgImage : "https://www.jubilantfoodworks.com/images/brand_pic3.jpg"
    },
    {
      title : "Chocolate Brownie Sundae",
      description:"A Chocolate Brownie Sundae is a decadent, indulgent dessert that combines rich chocolate brownies with ice cream and various toppings, creating a perfect blend of textures and flavors.",
      bgImage : "https://www.foodandwine.com/thmb/XdFd-DvTtouryLCjeCqwhfmmK-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/molten-chocolate-cake-FT-RECIPE0220-0a33d7d0ab0c45588f7bfe742d33a9bc.jpg"
    },
    {
      title: "Chiken Burger",
      description:"The centerpiece of the burger, the chicken patty is made from ground chicken (or sometimes a whole chicken breast) that's seasoned with spices, herbs, and sometimes",
      bgImage: "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/45bd3226-8e4c-4597-8114-30691b190af0_616564.jpg"
    },
    {
      title :"STUFFED GSARLIC BREADSTICKS",
      description:"The dough is the foundation of the breadsticks, and it’s usually made with flour, yeast, butter, salt, and a touch of sugar.",
      bgImage: "https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/pizza-sixteen_nine.jpg?size=948:533"
    },
  ]
  const  databox = () => {
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
}

export default databox;