'use client';

import React, { useState, useEffect} from 'react';
import sliderStaysData from "mockapi/stays.json"


export default function Slider(){
    const [sliderValue, setSliderValue] = useState(sliderStaysData.staysData);
    const getStayById = (id) => {
        return sliderStaysData.staysData.find(stay => stay.id === id);
    }
    const stayWithId1 = getStayById(1);
    const stayWithId2 = getStayById(2);
    const stayWithId3 = getStayById(3);
    const stayWithId4 = getStayById(4);
    const stayWithId5 = getStayById(5);

    console.log(stayWithId2);

    return(
        <>
            <div className='slider-container'>
                <div className='slider-inner'>
                    <button></button>
                </div>
            </div>
        </>
    )
}