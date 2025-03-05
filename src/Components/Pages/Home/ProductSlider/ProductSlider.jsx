import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineHeart, AiOutlineLeft, AiOutlineRight } from "react-icons/ai";



const ProductSlider = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("products.json") // API URL পরিবর্তন করুন
            .then((res) => res.json())
            .then((data) => setProducts(data))
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
            <h2 className="text-2xl font-bold text-center mb-4">New Arrivals</h2>
            <div className="text-center mb-4">
                <span className="px-4 py-1 bg-red-500  rounded-full">SPRING 2025</span>
            </div>
            <Slider {...settings}>
                {products.map((product) => (
                    <div key={product.id} className="p-2">
                        <div className="relative  rounded-lg shadow-lg overflow-hidden">
                            <img src={product.image} alt={product.name} className="w-full h-96 object-cover" />
                            <button className="absolute top-3 right-3 text-xl  hover:text-red-500">
                                <AiOutlineHeart />
                            </button>
                            <div className="p-4">
                                <p className=" font-medium">{product.name}</p>
                                <p className=" font-bold">৳ {product.price}</p>
                            </div>
                        </div>
                    </div>
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

export default ProductSlider;
