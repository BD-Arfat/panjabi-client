import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";

const reviews = [
    {
      id: 1,
      name: "Arman Hossain",
      review:
        "একদম পারফেক্ট পাঞ্জাবি। কাপড়ের মান খুব ভালো এবং ডেলিভারি দ্রুত হয়েছে। Highly recommended!",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/men/1.jpg",
    },
    {
      id: 2,
      name: "Tahmina Akter",
      review:
        "আমি আমার স্বামীর জন্য কিনেছি, সে খুব খুশি! ফিটিং আর ডিজাইন একদম পারফেক্ট।",
      rating: 4,
      image:
        "https://randomuser.me/api/portraits/women/2.jpg",
    },
    {
      id: 3,
      name: "Rakibul Islam",
      review:
        "এটা আমার প্রথম অর্ডার ছিল। সত্যি বললে, প্রোডাক্ট দেখে আমি খুবই সন্তুষ্ট।",
      rating: 5,
      image:
        "https://randomuser.me/api/portraits/men/3.jpg",
    },
  ];

const CustomerReview = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
      };
    
    return (
        <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
      <Slider {...settings}>
        {reviews.map((review) => (
          <div key={review.id} className="p-4">
            <div className=" rounded-lg shadow-md p-6 text-center">
              <img
                src={review.image}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-300"
              />
              <h3 className="text-lg font-semibold">{review.name}</h3>
              <p className=" my-2">{review.review}</p>
              <div className="flex justify-center text-yellow-500 text-lg">
                {Array.from({ length: review.rating }, (_, i) => (
                  <AiFillStar key={i} />
                ))}
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    );
};

export default CustomerReview;