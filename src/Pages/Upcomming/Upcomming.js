import React from 'react';
import './Upcomming.css';
const Upcomming = () => {
    return (
        <div className='my-4'>
            <h2 className='text-4xl font-serif'>Events I Organizing</h2>
            <div className='mx-auto mt-6 event'>
                <div className='grid grid-cols-3 pt-7'>
                    <img className='eventImage1' src="./asset/upcommingEvents/1.png" alt="" />
                    <img className='eventImage2 mt-16' src="./asset/upcommingEvents/2.png" alt="" />
                    <img className='eventImage3 mt-40' src="./asset/upcommingEvents/3.png" alt="" />

                </div>
            </div>

        </div>
    );
};

export default Upcomming;