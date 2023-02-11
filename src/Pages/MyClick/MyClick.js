import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Components/Card/Card';

const MyClick = () => {
    const photos = useLoaderData()
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                photos?.map(photo => <Card photo={photo}></Card>)
            }
        </div>
    );
};

export default MyClick;