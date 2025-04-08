 "use client";
import React from "react";

const BrandCard = ({ image, logo, altText, description, buttonLink }) => (
  <div className="mr-contact-us-wrap w-full sm:w-1/2 xl:w-1/4 px-2 mb-4 relative group">
    <div className="relative bg-gray-100 shadow-lg overflow-hidden">
      {/* Image */}
      <div
        className="h-96 bg-center transition-all duration-300 hover:opacity-20"
        style={{ backgroundImage: `url(${image})` }}
      ></div>
      {/* Logo */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 z-10 opacity-100 transition-opacity duration-300 group-hover:opacity-100">
        <img src={logo} alt={altText} className="w-3/4 h-12 object-contain" />
      </div>
      {/* Hover Content */}
      <div className="absolute inset-11 flex flex-col justify-center items-center bg-white bg-opacity-90 opacity-0 group-hover:opacity-0 transition-opacity duration-300">
        <p className="text-gray-700 text-sm text-center px-4 mb-4">{description}</p>
        <a href={buttonLink}>
          <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition">
            KNOW MORE
          </button>
        </a>
      </div>
    </div>
  </div>
);


const ThirdTask = () => {
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
      logo: "https://www.vivantahotels.com/content/dam/tajhotels/logos/new-design-logos/brands/seleqtions-brand-home-logo.PNG",
      altText: "Gateway Brand",
      description: "Catering to the explorer’s spirit and bringing people together to celebrate moments. A transformative escape offering sun-kissed beaches to verdant landscapes and cityscapes steeped-in-history.​",
      buttonLink: "https://www.gateway-hotels.com/en-in",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="flex flex-wrap -mx-2">
        {brands.map((brand, index) => (
          <BrandCard key={index} {...brand} />
        ))}
      </div>
    </div>
  );
};

export default ThirdTask;

 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 // "use client";
// import React, { useState } from "react";

// const BrandCard = ({ image, logo, altText, description, buttonLink }) => (
//   <div className="w-full h-full sm:w-1/2 xl:w-1/4 px-0 mb-4">
//     <div className="bg-white shadow-lg  overflow-hidden hover:select-all">
//       <div className="relative">
//         <picture>
//           <source type="image/jpeg" media="(max-width: 767px)" alt={altText} />
//           <source type="image/jpeg" media="(min-width: 768px)" data-src={image} alt={altText} />
//           <img className="w-full h-48 object-cover" src={image} alt={altText} />
//         </picture>
//         <img
//           className="absolute inset-x-0 bottom-0 mx-auto w-3/4 h-12 object-contain"
//           src={logo}
//           alt="brand logo"
//         />
//       </div>
//       <div className="p-4 text-center">
//         <p className="text-gray-600 text-sm mb-4">{description}</p>
//         <a href={buttonLink}>
//           <button className="bg-white-600 text-violet-950 px-4 py-2 rounded hover:bg-slate-700 transition">
//             KNOW MORE
//           </button>
//         </a>
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
//         className="bg-blue-600 text-white px-2 py-1 rounded mb-6 hover:bg-blue-700 transition"
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









































// "use client";
// import React, { useState } from "react";

// const BrandCard = ({ image, logo, altText, description, buttonLink }) => (
//   <div className="mr-contact-us-wrap col-xl-3 col-sm-4 col-11" style={{ paddingLeft: 0, paddingRight: 0 }}>
//     <div className="cont-us-image-cont">
//       <picture className="bannerImage">
//         <source type="image/jpeg" media="(max-width: 767px)" alt={altText} />
//         <source type="image/jpeg" media="(min-width: 768px)" data-src={image} alt={altText} />
//         <img className="card-img-top brand-img-card" src={image} alt={altText} width="100%" />
//       </picture>
//       <img className="brand-icon icon-text" src={logo} alt="brand logo" style={{ width: "70%", marginLeft: "15%", height: "4vw" }} />
//     </div>
//     <div className="cont-us-details-container">
//       <div className="cont-us-contact-wrap">
//         <div className="cont-us-phone-number" style={{ color: "#787777", padding: "15px", textAlign: "center" }}>
//           <p>{description}</p>
//         </div>
//         <a href={buttonLink}>
//           <button className="ihcl-button-secondary">KNOW MORE</button>
//         </a>
//       </div>
//     </div>
//   </div>
// );

// const  ThirdTask = () => {
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
//     <div className="marqueebrands-full-width aem-GridColumn aem-GridColumn--default--12">
//       <button
//         className="toggle-visibility-button"
//         onClick={() => setVisible((prevVisible) => !prevVisible)}
//         style={{ marginBottom: "20px", padding: "10px 20px", cursor: "pointer" }}
//       >
//         {visible ? "Hide Brands" : "Show Brands"}
//       </button>
//       {visible && (
//         <div className="marquee-brand-data row">
//           {brands.map((brand, index) => (
//             <BrandCard key={index} {...brand} />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };


// export default ThirdTask;