import React from 'react';
import { AiFillStar } from "react-icons/ai";
const CardDetails = ({ pictureDetails }) => {

    const { title, description, img, price, rating } = pictureDetails

    return (
        <div>
            <div class="flex flex-col items-center justify-center w-full max-w-sm mx-auto">
                <div class="w-full h-64 bg-gray-300 bg-center bg-cover rounded-lg shadow-md" style={{ backgroundImage: `url(${img})` }}></div>

                <div class="w-56 -mt-10 overflow-hidden bg-white rounded-lg shadow-lg md:w-64 dark:bg-gray-800">
                    <h3 class="py-2 font-bold tracking-wide text-center text-gray-800 uppercase dark:text-white">{title}</h3>

                    <div class="flex items-center justify-between px-3 py-2 bg-gray-200 dark:bg-gray-700">
                        <span class="font-bold text-gray-800 dark:text-gray-200">$129</span>
                        <button class="px-2 py-1 text-xs font-semibold text-white uppercase transition-colors duration-300 transform bg-gray-800 rounded hover:bg-gray-700 dark:hover:bg-gray-600 focus:bg-gray-700 dark:focus:bg-gray-600 focus:outline-none flex">Rating: {rating}<AiFillStar className='text-yellow-400' /></button>
                    </div>
                </div>
            </div>

            <div className=' bg-white rounded-lg shadow-lg w-1/2 py-5 mx-auto mt-4 dark:bg-gray-800 text-gray-800 dark:text-gray-200'>
                <div className='flex justify-center mt-4'>
                    <p className='text-xl'><span className='px-3 font-serif font-bold text-2xl'>Moment:</span>{title}</p>
                </div>
                <div className='flex justify-center mt-4'>
                    <p className='text-lg'><span className='font-serif font-bold text-2xl px-3'>Description:</span>{description}</p>
                </div>
                <div className='flex justify-center mt-4'>

                    <p className='text-lg mr-5 flex'><span className='font-serif font-bold text-2xl mr-2'>Rating:</span> {rating}<AiFillStar className='text-yellow-400' /></p>
                    <p className='text-lg ml-5'><span className='font-serif font-bold text-2xl'>Price:</span>{price}</p>

                </div>
            </div>


        </div>
    );
};

export default CardDetails;