import React from 'react';

const ReviewLoader = ({ pictureDetails }) => {
    console.log(pictureDetails)

    const { _id, title, description, img, price, rating } = pictureDetails
    return (

        <div className="overflow-x-auto mt-5">
            <div className='flex justify-center mb-4'>
                <p className='text-3xl underline text-gray-800 font-serif'>
                    Review
                </p>
            </div>
            <table className="table table-zebra w-full">

                <thead>
                    <tr>
                        <th>User</th>
                        <th>Title</th>
                        <th>Review</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th>1</th>
                        <td>{title}</td>
                        <td>Amazing picture</td>
                        <td>{price} $</td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td>{title}</td>
                        <td>This tiger is so cute</td>
                        <td>{price} $</td>
                    </tr>

                    <tr>
                        <th>3</th>
                        <td>{title}</td>
                        <td>This scene of dusk was just phenomenal</td>
                        <td>{price} $</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default ReviewLoader;