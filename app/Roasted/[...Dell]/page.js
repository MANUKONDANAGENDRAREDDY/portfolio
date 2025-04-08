"use client";

import React, { useEffect, useState } from 'react';

const Page = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [cart, setCart] = useState([]);

  // Fetch data with useEffect on the client side
  useEffect(() => {
    const fetchMenu = async () => {
      const response = await fetch("/api/menu.js");
      const data = await response.json();
      setMenuItems(data);
    };

    fetchMenu();
  }, []); // Empty dependency array to run only once on component mount

  const handleOrderNow = (item) => {
    setCart([...cart, item]);
    alert(`${item.name} added to cart!`);
  };

  // Calculate total price
  const total = cart.reduce((acc, item) => acc + parseInt(item.price.replace(" rs", "")), 0);

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div key={item.id} className="bg-white rounded-lg shadow-md overflow-hidden">
            <img src={item.image} alt={item.name} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-blue-600 font-bold">{item.price}</p>
              <button
                className="flex bg-red-500 h-9 justify-center items-center rounded-md w-28 hover:bg-neutral-400"
                onClick={() => handleOrderNow(item)}
              >
                ORDER NOW
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 p-4 bg-gray-100 rounded-lg">
        <h2 className="text-2xl font-bold">Cart</h2>
        {cart.length > 0 ? (
          <>
            <ul>
              {cart.map((item, index) => (
                <li key={index} className="flex justify-between p-2 border-b">
                  <span>{item.name}</span>
                  <span className="font-bold">{item.price}</span>
                </li>
              ))}
            </ul>
            <div className="mt-4 text-xl font-bold">
              Total: {total} rs
            </div>
          </>
        ) : (
          <p className="text-gray-500">Your cart is empty</p>
        )}
      </div>
    </div>
  );
};

export default Page;





































// "use client"
// import React from 'react';

//     const page= () => {
//         const menuItems = [
//           {
//               id: 1,
//               name: "Hyderabadi Dum Biryani",
//               description: "Aromatic ba8smati rice layered with marinated chicken, slow-cooked to perfection.",
//               price: "350 rs",
//               image: "https://www.shutterstock.com/image-photo/biryani-rice-indian-meal-chicken-600nw-2468763009.jpg"
//           },
//             {
//               id: 2,
//               name: "Mutton Biryani",
//               description: "Tender mutton pieces cooked with fragrant spices and long-grain basmati rice.",
//               price: "450 rs",
//               image: "https://static.vecteezy.com/system/resources/thumbnails/035/375/492/small/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg"
//             }, 
//             {
//               id: 3,
//               name: "Vegetable Biryani",
//               description: "Flavorful biryani made with fresh vegetables, spices, and aromatic rice.",
//               price: "200 Rs",    
//               image: "https://hogr.app/blog/wp-content/uploads/2022/10/1606114982_HyderabadiVeg.jpg"
//             }, 
//         ];
      
//         return (
//           <div className="container mx-auto p-6">
//             <h1 className="text-3xl font-bold text-center mb-6 text-green-500 ">Pista Restaurant Menu</h1>
//             <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
//               {menuItems.map((item) => (
//                 <div
//                   key={item.id}
//                   className="bg-white rounded-lg hover: shadow-md overflow-hidden"
//                 >
//                   <img
//                     src={item.image}
//                     alt={item.name}
//                     className="w-20
//                      h-10 object-cover"
//                   />
//                   <div className="p-4">
//                     <h2 className="text-xl font-bold mb-2">{item.name}</h2>
//                     <p className="text-gray-700 mb-4">{item.description}</p>
//                     <p className="text-blue-600 font-bold">{item.price}</p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         );
//       };

// export default page;
