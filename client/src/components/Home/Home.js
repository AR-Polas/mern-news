import React from 'react';
import Header from './Header/Header';
import Banner from './Banner/Banner'
import PopularNews from './PopularNews/PopularNews';
import LatestArticles from './LatestArticles/LatestArticles';
import Footer from '../Footer/Footer';

const Home = () => {
    return (
        <>
            <Header />
            <Banner />
            <PopularNews />
            <LatestArticles />
            <Footer />
        </>
    );
};

export default Home;