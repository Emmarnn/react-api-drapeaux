import React from 'react';
import Countries from '../components/Countries';
import axios from 'axios';
// import Navigation from '../components/Navigation';

const Home = () => {
    return (
        <>
        {/* <Navigation/> */}
            <h1>Home</h1>

            <Countries/>
        </>
    );
};

export default Home;