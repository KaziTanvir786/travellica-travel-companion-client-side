import React from 'react';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Collaborations from '../Collaborations/Collaborations';
import MainOfferings from '../MainOfferings/MainOfferings';
import OurTeam from '../OurTeam/OurTeam';
import './Home.css';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <h1 className="title mx-auto my-5">About Us</h1>
            <About></About>
            <h1 className="title mx-auto my-5">Main Offerings</h1>
            <MainOfferings></MainOfferings>
            <OurTeam></OurTeam>
            <h1 className="title mx-auto my-5">Collaborations</h1>
            <Collaborations></Collaborations>
        </div>
    );
};

export default Home;