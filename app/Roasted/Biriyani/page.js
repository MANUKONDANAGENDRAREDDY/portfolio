"use client"
import React from 'react';

    const page= () => {
        const menuItems = [
          {
              id: 1,
              name: "Hyderabadi Dum Biryani",
              description: "Aromatic ba8smati rice layered with marinated chicken, slow-cooked to perfection.",
              price: "350 rs",
              image: "https://www.shutterstock.com/image-photo/biryani-rice-indian-meal-chicken-600nw-2468763009.jpg"
          },
            {
              id: 2,
              name: "Mutton Biryani",
              description: "Tender mutton pieces cooked with fragrant spices and long-grain basmati rice.",
              price: "450 rs", 
              image: "https://static.vecteezy.com/system/resources/thumbnails/035/375/492/small/ai-generated-chicken-biryani-kerala-style-chicken-dhum-biriyani-made-using-jeera-rice-and-spices-arranged-in-a-brass-serving-bowl-photo.jpg"
            }, 
            {
              id: 3,
              name: "Vegetable Biryani",
              description: "Flavorful biryani made with fresh vegetables, spices, and aromatic rice.",
              price: "200 Rs",    
              image: "https://hogr.app/blog/wp-content/uploads/2022/10/1606114982_HyderabadiVeg.jpg"
            }, 
        ];
      
        return (
          <div className="container mx-auto p-6">
            <h1 className="text-3xl font-bold text-center mb-6 text-green-500 ">Pista Restaurant Menu</h1>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {menuItems.map((item) => (
                <div
                  key={item.id}
                  className="bg-white rounded-lg hover: shadow-md overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20
                     h-10 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-xl font-bold mb-2">{item.name}</h2>
                    <p className="text-gray-700 mb-4">{item.description}</p>
                    <p className="text-blue-600 font-bold">{item.price}</p>
                    <button className="flex hover:bg-gray-400 items-center align-middle justify-center h-10 w-56 mb-4 rounded-lg bg-red-500"> Order Now</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );
      };

export default page;
