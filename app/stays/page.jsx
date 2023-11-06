'use client';

import React, { useState, useEffect} from 'react';
import sliderStaysData from "mockapi/stays.json"
import Slider from "@/components/layout/slider";



export default function Stays() {
    const getStayById = (id) => {
        return sliderStaysData.staysData.find(stay => stay.id === id);
    }

    return (
        <>
            <Slider/>
        </>
    )
}