"use client"
import React, { useState } from 'react';

function ImageButton() {
    const [imageopen, setImageopen] = useState(false);


    return (
        <div className=" relative ">
        
            <div className="mt-1 relative ">
                {/* <div className="bg-gray-100 p-4 rounded-lg shadow-md "> */}
                <img
                    src="https://www.ihcltata.com/content/dam/new-paathya/desktop/stewardshipbannerweb.jpg"
                    // className="  rounded-xl "
                    alt="Environmental Stewardship"
                />
                <div className="mt-4 text-center absolute top-10 left-10">
                    <p className=" object-left  text-xl text-white font-bold">Promote Environmental Stewardship.</p>
                    <p className="text-white mt-2">
                        "IHCL has set in motion a slew of measures aimed at protecting the environment
                        and promoting sustainability. There are five key areas of focus"
                    </p>
                </div>
                <div className="mt-4 absolute bottom-2 right-6">
                    <button className="buttom-1/5  bg-black text-white py-2 px-4 rounded-lg hover:bg-gray-600"
                        onClick={() => setImageopen(true)}>
                        Know more about our impact
                    </button>
                </div>
            </div>
          

            {imageopen &&
            <div className='bg-white absolute top-0 bottom-0 right-0 left-0 opacity-100'>
                <div
                   className="">
                    {/* <div className="p-6 rounded-lg shadow-lg opacity-90"> */}
                        <div className="flex justify-end ">
                            <button type='button' className="text-gray-500 hover:text-gray-700"
                                onClick={() => setImageopen(false)}> x </button>
                        </div>
                        <div className="mt-4  ">
                            <p className="text-lg font-bold">Sustainability Certification</p>
                            <p className="text-gray-700 mt-2">
                                Our commitment to sustainability objectives has been unwavering since we joined EarthCheck, the world's leading scientific benchmarking and certification group for the tourism and travel industry.
                            </p>
                        </div>
                    </div>
                {/* </div> */}
                </div>
            }

        </div>
    );
}

export default ImageButton;