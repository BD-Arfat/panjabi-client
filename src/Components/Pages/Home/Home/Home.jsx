import React from 'react';
import Banner from '../Banner/Banner';
import BrandName from '../BrandName/BrandName';
import WeddingStyleGuide from '../WeddingStyleGuide/WeddingStyleGuide';
import TrendingCategories from '../TrendingCategories/TrendingCategories';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className='my-10'>
            <BrandName></BrandName>
            </div>
            <div className="my-12">
            <WeddingStyleGuide></WeddingStyleGuide>
            </div>
            <div className="my-12">
            <TrendingCategories></TrendingCategories>
            </div>
        </div>
    );
};

export default Home;