import React from "react";
import bannerImage from "../../../../assets/sellor.jpg"; // ইমেজ পাথ ঠিক রাখো
import BannerSection from "../../../../Sheard/BannerSection/BannerSection";

const Banner = () => {
  return (
    <div>
      <BannerSection bannerImage={bannerImage} title1='You will find good quality' title2='products here.'></BannerSection>
    </div>
  );
};

export default Banner;
