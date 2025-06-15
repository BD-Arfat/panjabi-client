import React, { useEffect, useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import { Link } from "react-router-dom";

const TrendingCategories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://panjabi-server-three.vercel.app/products")
      .then((res) => res.json())
      .then((data) => {
        // ইউনিক ক্যাটাগরি ও তার ইমেজ বের করা
        const uniqueCategories = [
          ...new Map(
            data.map((product) => [product.category, { category: product.category, categoryImage: product.categoryImage }])
          ).values(),
        ];
        setCategories(uniqueCategories);
      })
      .catch((error) => console.error("Error fetching data:", error));
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
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="w-11/12 mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Trending Categories
      </h2>
      <div>
        <Slider {...settings}>
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <div
                key={index}
                className="relative p-5 group cursor-pointer overflow-hidden mx-auto  text-center"
              >
                <img className="h-80 mx-auto" src={category.categoryImage} alt="" />
                <Link to={`/allProducts/${category.category}`} className="bottom-10 relative bg-white text-black py-2 border-black rounded-md px-4">
                {
                  category.category
                }
                </Link>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No categories found</p>
          )}
        </Slider>
      </div>
    </section>
  );
};

const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute right-4 top-1/2 transform -translate-y-1/2  border shadow-lg p-2 rounded-full z-10"
    onClick={onClick}
  >
    <AiOutlineRight className="text-xl" />
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute left-4 top-1/2 transform -translate-y-1/2  border shadow-lg p-2 rounded-full z-10"
    onClick={onClick}
  >
    <AiOutlineLeft className="text-xl" />
  </button>
);

export default TrendingCategories;
