import React from 'react';
import Chefs from '../Chefs/Chefs';
import Banner from '../Banner/Banner';
import Introduction from '../Introduction/Introduction';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Introduction></Introduction>
            <Chefs></Chefs>
        </div>
    );
};

export default Home;