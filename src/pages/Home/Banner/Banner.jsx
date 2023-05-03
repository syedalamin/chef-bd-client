import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        <div className='banner-bg flex items-center justify-center text-white text-center'>
           <div className='md:w-6/12'>
                <p className='text-2xl mb-5'> Chinese Chef Tutul BD Recipe</p>
                <h2 className='text-5xl font-bold'>The Bengali Best Chef And Recipe Community</h2>
           </div>
        </div>
    );
};

export default Banner;