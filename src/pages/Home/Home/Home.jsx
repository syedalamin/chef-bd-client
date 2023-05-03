import React from 'react';
import Chefs from '../Chefs/Chefs';
import Banner from '../Banner/Banner';
import Introduction from '../Introduction/Introduction';
import Experience from '../Experience/Experience';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Chefs></Chefs>
            <Experience></Experience>
        </div>
    );
};

export default Home;