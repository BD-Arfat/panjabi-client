import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import Productsitem from '../../../../Sheard/ProductsItem';

const EidOfferProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("https://panjabi-server-three.vercel.app/products") // API URL পরিবর্তন করুন
            .then((res) => res.json())
            .then((data) => {
                const filterdata = data.filter( product => product.section === 'eid');
                setProducts(filterdata)
            })
            .catch((error) => console.error("Error fetching products:", error));
    }, []);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <CustomNextArrow />, 
        prevArrow: <CustomPrevArrow />,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };

    return (
        <div className="w-full p-4">
            <h2 className="text-2xl font-bold text-center mb-4">EID OFFER</h2>
            <div className="text-center mb-4">
                <span className="px-4 py-1 bg-red-500  rounded-full">Eid 2k25</span>
            </div>
            <Slider {...settings}>
                {products.map((product) => (
                    <Productsitem product={product}></Productsitem>
                ))}
            </Slider>
        </div>
    );
};

const CustomNextArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="absolute right-0 top-1/2 transform -translate-y-1/2 border shadow-lg p-2 rounded-full z-10" onClick={onClick}>
            <AiOutlineRight className="text-xl" />
        </button>
    );
};

const CustomPrevArrow = (props) => {
    const { onClick } = props;
    return (
        <button className="absolute left-0 top-1/2 transform -translate-y-1/2 border  shadow-lg p-2 rounded-full z-10" onClick={onClick}>
            <AiOutlineLeft className="text-xl" />
        </button>
    );
};

export default EidOfferProducts;