import React from 'react';
import Head from '../../../Layout/Head/Head';
import Achievement from '../../Achievement/Achievement';
import Hero from '../../Hero/Hero';
import HomePhoto from '../../HomePhoto/HomePhoto';
import Timeline from '../../Timeline/Timeline';

const Home = () => {
    return (
        <div>
            <Head title="Home" />
            <Hero></Hero>
            <HomePhoto></HomePhoto>
            <Timeline></Timeline>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;