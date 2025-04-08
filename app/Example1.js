"use client";
import React, { useState } from "react";


const BrandCard = ({ image, logo, altText, description, buttonLink }) => (
  <div className=" mr-contact-us-wrap w-full sm:w-1/2 xl:w-1/4 px-2 mb-4 relative  group">
    <div className="relative bg-gray-100 shadow-lg overflow-hidden ">
      {/* Image */}
      <div
        className="h-96  bg-center transition-all duration-300 hover:opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Logo */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10">
        <img
          src={logo}
          alt="brand logo"
          className="w-3/4 h-12 object-contain"
        />
      </div>
      {/* Hover Content */}
      <div className="absolute inset-11 flex flex-col justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
      <img
          src={logo}
          alt="brand logo"
          className="w-3/4 h-12 object-contain"
        />
        <p className="text-gray-700 text-sm text-center px-4 mb-4">
          {description}
          
        </p>
        <a href={buttonLink}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            KNOW MORE
          </button>
        </a>
      </div>
    </div>
  </div>
);


const Example1 = () => {
  const brands = [
    {
      image: "https://www.vivantahotels.com/content/dam/vivanta/banners/our-brands/taj-our-brands-1920X1280.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
      logo: "https://www.vivantahotels.com/content/dam/tajhotels/logos/new-design-logos/brands/taj-brand-home-logo.PNG",
      altText: "Taj Brand",
      description: "The unrivalled guardian of grandeur, Taj conjures a panoply of superlatives. With an art of hospitality that has been perfected over a century, Taj delivers unmatched experiences and lasting memories for guests around the world.",
      buttonLink: "https://www.tajhotels.com",
    },
    {
      image: "https://www.vivantahotels.com/content/dam/vivanta/banners/our-brands/seleqtions-our-brands-1920X1280-1.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
      logo: "https://www.vivantahotels.com/content/dam/tajhotels/logos/new-design-logos/brands/seleqtions-brand-home-logo.PNG",
      altText: "SeleQtions Brand",
      description: "Celebrating a legacy of time, a sense of place or a specific theme, SeleQtions offers a range of marquee hotels that each boast of distinct and special experiences.",
      buttonLink: "https://www.seleqtionshotels.com",
    },
    {
      image: "https://www.vivantahotels.com/content/dam/tajhotels/marquee-brands/image-002.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
      logo: "https://www.vivantahotels.com/content/dam/tajhotels/ihcl/Logos/gateway-Logo-001.png",
      altText: "Gateway Brand",
      description: "Catering to the explorer’s spirit and bringing people together to celebrate moments. A transformative escape offering sun-kissed beaches to verdant landscapes and cityscapes steeped-in-history.​",
      buttonLink: "https://www.gateway-hotels.com/en-in",
    },
    {
      image: "https://www.seleqtionshotels.com/content/dam/seleqtions/banners/our-brands/vivanta-our-brands-1920X1280-2.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
      logo: "https://www.seleqtionshotels.com/content/dam/tajhotels/ihcl/Logos/icon-vivanta.png",
      altText: "Gateway Brand",
      description: "A distinctive collection of vibrant hotels that are handpicked for the young, contemporary achievers of today who stand apart without being rebels, and that allow them to discover joie de vivre..​",
      buttonLink: "https://www.gateway-hotels.com/en-in",
    },
    {
      image: "https://www.seleqtionshotels.com/content/dam/seleqtions/banners/our-brands/ginger-our-brands-1920X1280-3.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
      logo: "https://www.seleqtionshotels.com/content/dam/ama/Logo/gingerLogo.png",
      altText: "Gateway Brand",
      description: "Catering to the explorer’s spirit and bringing people together to celebrate moments. A transformative escape offering sun-kissed beaches to verdant landscapes and cityscapes steeped-in-history.​",
      buttonLink: "https://www.gateway-hotels.com/en-in",
    },
    {
      image: "https://www.seleqtionshotels.com/content/dam/seleqtions/banners/our-brands/tol-2180X1330.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
      logo: "https://www.seleqtionshotels.com/content/dam/tajhotels/ihcl/Logos/tol-logo.png",
      altText: "Gateway Brand",
      description: "Catering to the explorer’s spirit and bringing people together to celebrate moments. A transformative escape offering sun-kissed beaches to verdant landscapes and cityscapes steeped-in-history.​",
      buttonLink: "https://www.gateway-hotels.com/en-in",
    },
    {
      image: "https://www.seleqtionshotels.com/content/dam/seleqtions/banners/our-brands/ama-our-brands-1920X1280-5.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
      logo: "https://www.seleqtionshotels.com/content/dam/ama/Logo/ama-logo-transparent.png",
      altText: "Gateway Brand",
      description: "Catering to the explorer’s spirit and bringing people together to celebrate moments. A transformative escape offering sun-kissed beaches to verdant landscapes and cityscapes steeped-in-history.​",
      buttonLink: "https://www.gateway-hotels.com/en-in",
    },
    {
      image: "https://www.seleqtionshotels.com/content/dam/tajhotels/campaign/republic/qmin.PNG",
      logo: "https://www.seleqtionshotels.com/content/dam/qmin/Original-logo-qmin.png",
      altText: "Gateway Brand",
      description: ".​",
      buttonLink: "https://www.gateway-hotels.com/en-in",
    },
  ];

  return (
    <div className="container mx-auto px-20 py-32">
      <div className="flex flex-wrap -mx-2">
        {brands.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
        <div
      className="rightArrow-marqueee-brand absolute z-2 top-[32%] right-[2%]"
    >
      <span
        className="icon-carousel-arrow-coloured-right text-[2.5rem] font-icomoon leading-none before:content-['\e910'] before:text-primary text-white font-bold tracking-[3px]"
      >
        NEXT→
      </span>
    </div>
      </div>
    </div>
  );
};

export default Example1;














































// "use client";
// import React, { useState } from "react";

// const BrandCard = ({ image, logo, altText, description, buttonLink }) => (
//   <div className="w-full sm:w-1/2 xl:w-1/4 px-2 mb-4">
//     <div className="relative bg-white shadow-lg rounded-lg overflow-hidden group">
//       {/* Image Container */}
//       <div className="relative h-48 overflow-hidden">
//         <img
//           src={image}
//           alt={altText}
//           className="h-1/2 w-full object-cover transition-all duration-300 group-hover:h-full"
//         />
//       </div>
//       {/* Content */}
//       <div className="p-4">
//         <img
//           src={logo}
//           alt="brand logo"
//           className="w-3/4 mx-auto h-12 object-contain mb-4"
//         />
//         <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//           <p className="text-gray-700 text-sm mb-4">{description}</p>
//           <a href={buttonLink}>
//             <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
//               KNOW MORE
//             </button>
//           </a>
//         </div>
//       </div>
//     </div>
//   </div>
// );

// const ThirdTask = () => {
//   const [brands] = useState([
//     {
//       image: "https://www.vivantahotels.com/content/dam/vivanta/banners/our-brands/taj-our-brands-1920X1280.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
//       logo: "https://www.vivantahotels.com/content/dam/tajhotels/logos/new-design-logos/brands/taj-brand-home-logo.PNG",
//       altText: "Taj Brand",
//       description: "The unrivalled guardian of grandeur, Taj conjures a panoply of superlatives. With an art of hospitality that has been perfected over a century, Taj delivers unmatched experiences and lasting memories for guests around the world.",
//       buttonLink: "https://www.tajhotels.com",
//     },
//     {
//       image: "https://www.vivantahotels.com/content/dam/vivanta/banners/our-brands/seleqtions-our-brands-1920X1280-1.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
//       logo: "https://www.vivantahotels.com/content/dam/tajhotels/logos/new-design-logos/brands/seleqtions-brand-home-logo.PNG",
//       altText: "SeleQtions Brand",
//       description: "Celebrating a legacy of time, a sense of place or a specific theme, SeleQtions offers a range of marquee hotels that each boast of distinct and special experiences.",
//       buttonLink: "https://www.seleqtionshotels.com",
//     },
//     {
//       image: "https://www.vivantahotels.com/content/dam/tajhotels/marquee-brands/image-002.jpg/jcr:content/renditions/cq5dam.web.756.756.jpeg",
//       logo: "https://www.vivantahotels.com/content/dam/tajhotels/logos/new-design-logos/brands/seleqtions-brand-home-logo.PNG",
//       altText: "Gateway Brand",
//       description: "Catering to the explorer’s spirit and bringing people together to celebrate moments. A transformative escape offering sun-kissed beaches to verdant landscapes and cityscapes steeped-in-history.​",
//       buttonLink: "https://www.gateway-hotels.com/en-in",
//     },
//   ]);

//   const [visible, setVisible] = useState(true);

//   return (
//     <div className="container mx-auto px-4 py-6">
//       <button
//         className="bg-blue-600 text-white px-4 py-2 rounded mb-6 hover:bg-blue-700 transition"
//         onClick={() => setVisible((prevVisible) => !prevVisible)}
//       >
//         {visible ? "Hide Brands" : "Show Brands"}
//       </button>
//       {visible && (
//         <div className="flex flex-wrap -mx-2">
//           {brands.map((brand, index) => (
//             <BrandCard key={index} {...brand} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default ThirdTask;
