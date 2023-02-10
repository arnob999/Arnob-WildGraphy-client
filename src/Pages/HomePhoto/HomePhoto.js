import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from '../Components/Card/Card';

const HomePhoto = () => {
    const [photos, setPhotos] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/photo')
            .then(res => res.json())
            .then(data => setPhotos(data))
    }, [])
    console.log(photos)
    return (
        <div className='flex justify-center flex-col'>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>

                {
                    photos?.map(photo => <Card key={photo._id} photo={photo}></Card>)
                }
            </div>
            <Link className='btn btn-success glass' to={'myClick'}>See All</Link>
        </div>
    );
};

export default HomePhoto;