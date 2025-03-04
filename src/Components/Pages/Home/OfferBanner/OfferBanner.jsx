import React from 'react';

const OfferBanner = () => {
    return (
        <div className=" md:w-11/12 md:mx-auto border-t-4 border-b-4 border-red-500 py-4 px-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            <div className="text-xl md:text-2xl font-bold ">
                HOME DELIVERY <span className="text-red-600">ALL OVER BANGLADESH</span>
            </div>
            <div className="text-xl md:text-2xl font-bold  mt-2 md:mt-0">
                <span className="">SPECIAL</span> <span className="text-red-600">OFFER</span>
            </div>
        </div>
    );
};

export default OfferBanner;