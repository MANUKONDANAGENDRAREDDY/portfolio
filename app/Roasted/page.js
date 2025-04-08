"use client"
import { title } from 'process';
import React, { useState } from 'react';

const Page = () => {
  const [cart, setcart] = useState ([]);

  const menuItems = [  
    {
      id: 1,
      name: "Classic pizza",
      description: "Juicy beef patty topped with cheddar cheese, lettuce, tomato, and our signature sauce.",
      price: "120 rs",
      image: "https://www.foodandwine.com/thmb/Wd4lBRZz3X_8qBr69UOu2m7I2iw=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/classic-cheese-pizza-FT-RECIPE0422-31a2c938fc2546c9a07b7011658cfd05.jpg"
    },
    {
      id: 2,
      name: "cheese Margherita Pizza",
      description: "Wood-fired pizza topped with fresh mozzarella, basil, and a drizzle of olive oil.",
      price: "159 rs",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo2caybeYXSroui0tILLretGZhzZ03-Hhkzw&s",
    },
    {
      id: 3,
      name: "Chocolate Brownie Sundae",
      description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
      price: "99 rs",
      image: "https://www.foodandwine.com/thmb/XdFd-DvTtouryLCjeCqwhfmmK-A=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/molten-chocolate-cake-FT-RECIPE0220-0a33d7d0ab0c45588f7bfe742d33a9bc.jpg", 
    },
   {
    id: 4,
    name: "Mexican Green Wave",
    description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
    price: "199 rs",
    image:"https://www.jubilantfoodworks.com/images/brand_pic3.jpg"
   },
   {
    id: 5,
    name: "Peppy Paneer",
    description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
    price: "239 rs",
    image:"https://media.licdn.com/dms/image/v2/C5612AQEp1L1RF6B3cw/article-cover_image-shrink_720_1280/article-cover_image-shrink_720_1280/0/1601640019572?e=2147483647&v=beta&t=yK8KFFtX07_AYT1IedGQi4dh4E9N65cs2vCv6RFRDV4"
   },
   {
    id: 6,
    name: "STUFFED GSARLIC BREADSTICKS ",
    description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
    price: "189 rs",
    image:"https://akm-img-a-in.tosshub.com/businesstoday/images/story/202212/pizza-sixteen_nine.jpg?size=948:533"
   },
   {
    id: 7,
    name: "CHICKEN PARCEL",
    description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
    price: "99 rs",
    image:"https://bl-i.thgim.com/public/migration_catalog/article18251395.ece/alternates/FREE_1200/custard-bliss-dominos"
   },
   {
    id: 8,
    name: "CHICKEN WINGS",
    description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
    price: "259 rs",
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfucytzRUIXrG9M2hQ_GBK3chHQ27YzNOimg&s"
   },{
    id: 9,
    name: "Chiken chesse Burger",
    description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
    price: "179 rs",
    image:"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto/RX_THUMBNAIL/IMAGES/VENDOR/2024/9/3/45bd3226-8e4c-4597-8114-30691b190af0_616564.jpg"
   },
   {
    id: 10,
    name: "Chiken Burger",
    description: "Warm brownie topped with vanilla ice cream, chocolate syrup, and whipped cream.",
    price: "149 rs",
    image:"https://assets.epicurious.com/photos/5c745a108918ee7ab68daf79/master/pass/Smashburger-recipe-120219.jpg"
   },
  ];
  
  const handleOrderNow =(item) => {
    setcart([...cart, item]);
    alert(`${item.name} added to cart!`); 
  };

  // const total = cart.reduce((acc, item) => acc + item.price, 0);
  const total = cart.reduce((acc, item) => acc + parseInt(item.price.replace(" rs", "")), 0);
 

  return (
    
    <div className="container mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Our Menu</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {menuItems.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{item.name}</h2>
              <p className="text-gray-700 mb-4">{item.description}</p>
              <p className="text-blue-600 font-bold">{item.price}</p>
              <button className="flex bg-red-500  h-9 justify-center items-center rounded-md w-28 hover:bg-neutral-400" onClick={()=> handleOrderNow(item)}>
                ORDER NOW</button>
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




