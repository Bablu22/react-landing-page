import React from 'react';
import './Hero.css'
import Hero1 from '../images/hero1.svg'
import Hero2 from '../images/hero2.svg'
const Hero = () => {
    return (
        <div>
            <div className="hero-area">
                <div className="hero-left">
                    <img src={Hero1} alt="" />
                </div>
                <div className="hero-main">
                    <h1>Find the right partners to fuel your business growth</h1>
                    <p>Join a vibrant community of MSPs to forge long-lasting relationships with partners that help you create excellent customer experiences</p>
                    <button className="hero-btn">Register today</button>
                </div>
                <div className="hero-right">
                    <img src={Hero2} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Hero;