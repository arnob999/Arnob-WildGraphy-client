import React from 'react';
import Head from '../../../Layout/Head/Head';
import Achievement from '../../Achievement/Achievement';
import Upcomming from '../../Upcomming/Upcomming';

const Home = () => {
    return (
        <div>
            <Head title="Home">

            </Head>
            <Upcomming></Upcomming>
            <Achievement></Achievement>
        </div>
    );
};

export default Home;