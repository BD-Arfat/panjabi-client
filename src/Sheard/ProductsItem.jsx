import React from 'react';
import { AiOutlineHeart } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Productsitem = ({product}) => {

    

    return (
        <div>
            <Link  to={`/products/${product._id}`}>
                <div key={product._id} className="p-2">
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
            </Link>
        </div>
    );
};

export default Productsitem;