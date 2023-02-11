import React from 'react';
import { Link } from 'react-router-dom';
import bg from './bg.png'
import './Hero.css'
const Hero = () => {
    return (
        <div className="hero min-h-screen mb-9" style={{ backgroundImage: `url(${bg})` }}>
            <div className="hero-overlay bg-opacity-25"></div>
            {/* <div className="text-center text-neutral-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
                    <p className="mb-5">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div> */}

            <Link to={'./myClick'}>
                <button className='btn mt-72 btn-wide explore'>Let's Explore</button>
            </Link>
        </div>
    );
};

export default Hero;