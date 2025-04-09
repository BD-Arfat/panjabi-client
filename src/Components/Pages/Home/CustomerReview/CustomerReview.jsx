import React, { useEffect, useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AiFillStar } from "react-icons/ai";



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

      const [review, setReview] = useState([]);
      useEffect(()=>{
        fetch('http://localhost:3000/review')
        .then(res => res.json())
        .then(data =>{
          setReview(data)
        })
      },[])
    
    return (
        <div className="w-full max-w-3xl mx-auto p-6">
      <h2 className="text-2xl font-bold text-center mb-6">Customer Reviews</h2>
      <Slider {...settings}>
        {review.map((review) => (
          <div key={review.id} className="p-4">
            <div className=" rounded-lg shadow-md p-6 text-center">
              <img
                src={review.userImage}
                alt={review.name}
                className="w-16 h-16 rounded-full mx-auto mb-4 border-2 border-gray-300"
              />
              <h3 className="text-2xl font-semibold">{review.name}</h3>
              <h3 className="text-sm font-semibold "> Product name: {review.productName}</h3>
              <p className=" mt-1 mb-3">{review.des}</p>
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