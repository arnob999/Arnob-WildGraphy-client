import React from 'react';
import { Link } from 'react-router-dom';
import bg from './bg.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero heroHeight mb-9" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-25"></div>
            <Link to={'./myClick'}>
                <button className='btn mt-72 btn-wide explore'>Let's Explore</button>
            </Link>
        </div>
    );
};
export default Hero;