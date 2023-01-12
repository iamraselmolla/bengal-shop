import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import DealsofTheWeek from './DealsofTheWeek';
import FreshCollections from './FreshCollections';
import './home.css'

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Categories></Categories>
        <FreshCollections></FreshCollections>
        <DealsofTheWeek></DealsofTheWeek>
        </>
    );
};

export default Home;