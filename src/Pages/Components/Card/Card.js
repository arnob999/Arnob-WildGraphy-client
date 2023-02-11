import React from 'react';
import './Card.css'
import { AiFillStar } from "react-icons/ai";
const Card = ({ photo }) => {
    const { title, description, img, price, rating } = photo;

    return (

        <div>
            <div className="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg mb-11 dark:bg-gray-800">
                <div className="px-4 py-2">
                    <h1 className="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                    <p className="mt-1 text-lg font-semibold text-gray-400 dark:text-gray-400">
                        {
                            description
                        }
                    </p>
                    <p className="mt-1 text-lg font-bold text-gray-400 dark:text-gray-400">
                        Price: {price} $
                    </p>
                </div>

                <img className="object-cover w-full h-48 mt-2" src={img} alt="" />

                <div className="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <p className="text-lg flex font-bold text-white">Rating:  <span className='flex'>  {rating}<AiFillStar className='text-yellow-400' /></span> </p>
                    <button className="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Show Details</button>
                </div>
            </div>
        </div>

    );
};

export default Card;