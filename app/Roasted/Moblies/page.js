"use client"
import React from "react";

const Mobile = () => {
  const mobileItems = [
    {
      id: 1,
      name: "iPhone 16 Pro",
      description: "6.1-inch Super Retina XDR display, A16 Bionic chip, and 48MP main camera.",
      price: "Rs 1,00,000",
      image: "https://images.news18.com/ibnlive/uploads/2024/11/iphone-16-pro-max-dxomark-score-2024-11-47cd3de9bef628e102b4b68f363d8c42.jpg?impolicy=website&width=360&height=270",
    }, 
    {
      id: 2,
      name: "Samsung Galaxy S24 Ultra",
      description: "6.8-inch AMOLED display, Snapdragon 8 Gen 2, and 200MP quad camera.",
      price: "$1,30,000",
      image: "https://images.samsung.com/is/image/samsung/p6pim/in/2401/gallery/in-galaxy-s24-s928-sm-s928bzkqins-thumb-539573274", 
    },
    {
      id: 3,
      name: "Google Pixel 9 Pro",
      description: "6.7-inch OLED display, Tensor G2 chip, and an advanced AI camera system.",
      price: "Rs 1,70,000",
      image: "https://images.news18.com/ibnlive/uploads/2024/09/google-pixel-9-pro-xl-review-2024-09-8e29b8d8b9e843a2581a0e0a30458d5c.jpg?impolicy=website&width=360&height=270", 
    },
  ];

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Mobile Phones</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {mobileItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          > 
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover hover:list-image-none"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-blue-600 font-bold">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Mobile;
