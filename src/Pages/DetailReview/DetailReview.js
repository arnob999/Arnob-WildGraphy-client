import React from 'react';
import CardDetails from '../Components/CardDetails/CardDetails';
import ReviewLoader from '../Components/ReviewLoader/ReviewLoader';
import { useLoaderData } from 'react-router-dom';
const DetailReview = () => {
    const pictureDetails = useLoaderData();
    return (
        <div>
            <CardDetails pictureDetails={pictureDetails}></CardDetails>
            <ReviewLoader pictureDetails={pictureDetails}></ReviewLoader>
        </div>
    );
};

export default DetailReview;