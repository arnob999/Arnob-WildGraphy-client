import React from 'react';

const ReviewLoader = ({ pictureDetails }) => {
    console.log(pictureDetails)
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
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue</td>
                    </tr>

                    <tr>
                        <th>2</th>
                        <td>Hart Hagerty</td>
                        <td>Desktop Support Technician</td>
                        <td>Purple</td>
                    </tr>

                    <tr>
                        <th>3</th>
                        <td>Brice Swyre</td>
                        <td>Tax Accountant</td>
                        <td>Red</td>
                    </tr>
                </tbody>
            </table>
        </div>

    );
};

export default ReviewLoader;