import React from 'react';
import Head from '../../../Layout/Head/Head';
import Achievement from '../../Achievement/Achievement';
import Hero from '../../Hero/Hero';
import Timeline from '../../Timeline/Timeline';

const Home = () => {
    return (
        <div>
            <Head title="Home" />
            <Hero></Hero>
            <Timeline></Timeline>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;