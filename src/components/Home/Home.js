import React from 'react';
import Banner from '../Banner/Banner';
import MainOfferings from '../MainOfferings/MainOfferings';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="my-4">Main Offerings</h1>
            <MainOfferings></MainOfferings>
        </div>
    );
};

export default Home;