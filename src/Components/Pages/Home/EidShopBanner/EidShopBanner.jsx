import React from 'react';
import BannerSection from '../../../../Sheard/BannerSection/BannerSection';
import image from '../../../../assets/sellor-2.jpg'

const EidShopBanner = () => {
    return (
        <div>
            <BannerSection bannerImage={image} title1={'We have brought you the best '} title2={'Eid collection.'}></BannerSection>
        </div>
    );
};

export default EidShopBanner;