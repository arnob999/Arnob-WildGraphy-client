import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Achievement.css'
const Achievement = () => {
    const [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <section className="p-6 mb-8 dark:bg-gray-800 dark:text-gray-100">
                <div className="container mx-auto grid justify-center grid-cols-2 text-center lg:grid-cols-3">
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">{counterOn && <CountUp start={0} end={500} duration={3} delay={0} />}+</p>
                        <p className="text-sm sm:text-base">Clients</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">
                            {counterOn && <CountUp start={0} end={89} duration={3} delay={0} />}K+
                        </p>
                        <p className="text-sm sm:text-base">Followers on social media</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">{counterOn && <CountUp start={0} end={3} duration={3} delay={0} />}</p>
                        <p className="text-sm sm:text-base">Published books</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">{counterOn && <CountUp start={0} end={17} duration={3} delay={0} />}</p>
                        <p className="text-sm sm:text-base">Award</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">{counterOn && <CountUp start={0} end={12} duration={3} delay={0} />}</p>
                        <p className="text-sm sm:text-base">Years of experience</p>
                    </div>
                    <div className="flex flex-col justify-start m-2 lg:m-6">
                        <p className="text-4xl font-bold leading-none lg:text-6xl">{counterOn && <CountUp start={0} end={30} duration={3} delay={0} />}+</p>
                        <p className="text-sm sm:text-base">Workshops</p>
                    </div>
                </div>
            </section>
        </ScrollTrigger>
    );
};

export default Achievement;