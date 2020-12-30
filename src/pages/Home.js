import React from 'react';
import Hero from '../components/Hero';
import ItemListContainer from '../components/ItemListContainer';
import Deals from '../components/Deals';

const Home = () => {
    return (
        <>
            <Hero />
            <ItemListContainer />
            <Deals />
        </>
    )
}

export default Home
