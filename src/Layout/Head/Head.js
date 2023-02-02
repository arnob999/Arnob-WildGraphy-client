import React from 'react';
import { Helmet } from 'react-helmet';

const Head = ({ title }) => {
    return (
        <Helmet>
            <title>
                {title} | Arnob Wild-Graphy
            </title>
        </Helmet>
    );
};

export default Head;