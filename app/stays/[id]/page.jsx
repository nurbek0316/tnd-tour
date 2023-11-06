// pages/stay/page.jsx
'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

import StayDetail from '/components/layout/StayDetail';
import sliderStaysData from "/mockapi/stays.json";

const StayPage = ({params}) => {


    const stay = sliderStaysData.staysData.find(stay => stay.id === Number(params.id));

    if (!stay) {
        return <div>Stay not found</div>
    }

    return (
        <div>
        <StayDetail stay={stay} />
        </div>
    )
}

export default StayPage;
