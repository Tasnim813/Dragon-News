import React from 'react';
import swim from '../assets/swimming.png'
import cls from '../assets/class.png'
import play from '../assets/playground.png'
import bg from '../assets/bg.png'
const QZone = () => {
    return (
        <div >
            <div className='bg-base-200 p-3'>
                <h1 className='font-bold mb-5 mt-5'>Q-Zone</h1>
            <div>
        <img src={swim} alt="" />
        <img src={cls} alt="" />
        <img src={play} alt="" />
            </div>
            </div>
            <img className='p-3 mt-5' src={bg} alt="" />
        </div>
    );
};

export default QZone;