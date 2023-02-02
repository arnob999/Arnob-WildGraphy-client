import React, { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import './Achievement.css'
const Achievement = () => {
    const [counterOn, setCounterOn] = useState(false)

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)} >
            <div className='achievement'>
                <h1>
                    {counterOn && <CountUp start={0} end={112} duration={2} delay={0} />}+
                </h1>
                <h1>
                    {counterOn && <CountUp start={0} end={99} duration={7} delay={0} />}+
                </h1>
            </div>
        </ScrollTrigger>
    );
};

export default Achievement;