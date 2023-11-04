'use client';

import React, { useState, useEffect} from 'react';
import sliderStaysData from "mockapi/stays.json"



export default function Slider() {
    const [sliderValue, setSliderValue] = useState(sliderStaysData.staysData);

    // Function to get a stay by id
    const getStayById = (id) => {
        return sliderStaysData.staysData.find(stay => stay.id === id);
    }

    // Example of how to use the getStayById function
    const stayWithId2 = getStayById(2);

    console.log(stayWithId2);

    return (
        <>
            <div className='slider-container'>
                <div className='slider-inner'>
                    <button></button>
                </div>
            </div>
        </>
    )
}