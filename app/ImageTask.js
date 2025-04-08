"use client"
import React, { useState } from 'react';

function ImageTask() {
    const [imageopen , setImageopen] = useState(flase);

    function handleopen() {
        setImageopen(true);
      }
      function handleclose() {
        setImageopen(false);
      }

    return (
        <div class="relative">
            <div className="absolute max-w-xl mx-auto mt-20">
                <img className="h-64 w-full object-cover rounded-md" src="https://www.ihcltata.com/content/dam/new-paathya/desktop/stewardshipbannerweb.jpg"  alt=" "  /> 
                <div class="absolute inset-0 flex items-center justify-right">
                <h1 class="text-white text-3xl font-bold">Promote Environmental Stewardship.</h1>
                            <p class="text-sm lesding-4 font-semibold text-white">"IHCL has set in motion a slew of measures aimed at 
                                protecting the environment and promoting sustainability.
                                  There are five key areas of focus"</p>
                                  <div class="relative">
                        <a class="object-position: left bottom;">
                            <button type="button" class=" bg-white-50 text-blue text-sm leading-6 font-meadium px-2 py-2 rounded-lg"  onClick={() => setImageopen(true)}>know more about our impact </button>
                        </a>
                    </div>
                </div>
            </div>
            {imageopen &&   
            <div id="panel" class="relative opacity: 0.05;">
                  <div class="w-full h-60 object-cover rounded-lg">
                      <div>
                          <button type='button' className="bg-white-50 text-black text-sm leading-6 font-meadium px-2 py-2 rounded-lg"onClick={() =>setImageopen(false)}>x</button>
                      </div>
                
                          <div classNmae="absolute inset-0 flex items-center justify-center">
                              <h1 class="mt-1 text-lg font-medium text-white">Sustainability Certification</h1>
                              <p class="text-sm lesding-4 font-semibold text-white"> Our commitment to sustainability objectives has been 
                                  unwavering since we joined EarthCheck, the world's leading scientific benchmarking
                                   and certification group for the tourism and travel industry,</p>
                          </div>
                  </div>
              </div>
        }
          </div>
    );
}

export default ImageTask;