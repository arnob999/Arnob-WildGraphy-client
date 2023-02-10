import React from 'react';
import './Card.css'
const Card = ({ photo }) => {
    const { title, description, img, price, rating } = photo;

    return (

        <div>
            <div class="max-w-xs overflow-hidden bg-white rounded-lg shadow-lg mb-11 dark:bg-gray-800">
                <div class="px-4 py-2">
                    <h1 class="text-xl font-bold text-gray-800 uppercase dark:text-white">{title}</h1>
                    <p class="mt-1 text-lg font-semibold text-gray-400 dark:text-gray-400">
                        {
                            description
                        }
                    </p>
                    <p class="mt-1 text-lg font-bold text-gray-400 dark:text-gray-400">
                        Price: {price} $
                    </p>
                </div>

                <img class="object-cover w-full h-48 mt-2" src={img} alt="" />

                <div class="flex items-center justify-between px-4 py-2 bg-gray-900">
                    <h1 class="text-lg font-bold text-white">Rating:{rating}</h1>
                    <button class="px-2 py-1 text-xs font-semibold text-gray-900 uppercase transition-colors duration-300 transform bg-white rounded hover:bg-gray-200 focus:bg-gray-400 focus:outline-none">Show Details</button>
                </div>
            </div>
        </div>

    );
};

export default Card;