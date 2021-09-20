import React from 'react';
import './Service.css'
import Icon1 from '../images/icon1.svg'
import Icon2 from '../images/icon2.svg'
import Icon3 from '../images/icon3.svg'
const Service = () => {
    return (
        <div>
            <div className="service-area">
                <div className="container">
                <h2>List. Sell. Grow</h2>
                <SingleService></SingleService>
                </div>
            </div>
        </div>
    );
};

export default Service;




const SingleService = () => {
    return (
        <div className="single-service">
            <div>
                <img src={Icon1} alt="" />
                <p>Be a part of the only  All-In-One <br /> platform for IT services </p>
            </div>
            <div>
                <img src={Icon2} alt="" />
                <p>Come closer to finding your next <br /> customer</p>
            </div>
            <div>
                <img src={Icon3} alt="" />
                <p>Grow your business with a single <br /> click</p>
            </div>
        </div>
    );
};

