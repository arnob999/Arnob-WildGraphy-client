import React, { useEffect, useState } from 'react';
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
        <div>
            <Card></Card>
        </div>
    );
};

export default HomePhoto;