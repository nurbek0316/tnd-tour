import React from 'react';
import './Slider.css'

const StayDetail = ({ stay }) => {
    return (
        <div className='stay-detail'>
            <h2>{stay.hotel}</h2>
            <p>{stay.city}</p>
            <img src={stay.img} alt={stay.hotel} />
            <p>{stay.desc}</p>
            <p>Rating: {stay.rating}</p>
        </div>
    );
}

export default StayDetail;
