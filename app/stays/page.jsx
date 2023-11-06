'use client';

import React, { useState, useEffect} from 'react';
import sliderStaysData from "mockapi/stays.json"
import Slider from "@/components/layout/slider";



export default function Stays() {
    const [sliderValue, setSliderValue] = useState(sliderStaysData.staysData);

    const getStayById = (id) => {
        return sliderStaysData.staysData.find(stay => stay.id === id);
    }

    // Example of how to use the getStayById function
    const stayWithId2 = getStayById(2);

    // console.log(stayWithId2);

    return (
        <>
            <Slider/>
        </>
    )
}