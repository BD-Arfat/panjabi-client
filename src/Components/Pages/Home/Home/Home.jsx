import React from 'react';
import Banner from '../Banner/Banner';
import BrandName from '../BrandName/BrandName';
import WeddingStyleGuide from '../WeddingStyleGuide/WeddingStyleGuide';
import TrendingCategories from '../TrendingCategories/TrendingCategories';
import OfferBanner from '../OfferBanner/OfferBanner';
import ProductSlider from '../ProductSlider/ProductSlider';
import EidShopBanner from '../EidShopBanner/EidShopBanner';
import EidOfferProducts from '../EidOfferProducts/EidOfferProducts';

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
            <div className="my-12">
            <OfferBanner></OfferBanner>
            </div>
            <div className="md:mt-28 mb-10">
            <ProductSlider></ProductSlider>
            </div>
            <div className="md:mt-28 mb-10">
            <EidShopBanner></EidShopBanner>
            </div>
            <div className="md:mt-28 mb-10">
            <EidOfferProducts></EidOfferProducts>
            </div>
        </div>
    );
};

export default Home;