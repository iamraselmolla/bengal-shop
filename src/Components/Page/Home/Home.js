import React from 'react';
import Banner from './Banner';
import Categories from './Categories';
import Collections3Column from './Collections3Column';
import DealsofTheWeek from './DealsofTheWeek';
import FreshCollections from './FreshCollections';
import './home.css'
import PopularBrand from './PopularBrand';

const Home = () => {
    return (
        <>
        <Banner></Banner>
        <Categories></Categories>
        <FreshCollections></FreshCollections>
        <DealsofTheWeek></DealsofTheWeek>
        <PopularBrand></PopularBrand>
        <Collections3Column></Collections3Column>
        </>
    );
};

export default Home;