import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Productsitem from "../../../Sheard/ProductsItem";

const ProductsDetailsPage = () => {
    const product = useLoaderData();
    const [allProducts, setAllProducts] = useState([]);
    const [selectedImage, setSelectedImage] = useState(product.image);
    const [selectedSize, setSelectedSize] = useState("M");

    useEffect(() => {
        fetch('http://localhost:3000/products')
            .then(res => res.json())
            .then(data => {
                setAllProducts(data);
            });
    }, []);


    // প্রোডাক্ট ইমেজ অ্যারে
    const images = [
        product.image,
        product.image2,
        product.image3,
        product.image4,
        product.image5,
    ];

    const handleAddToCard = (productItme) =>{
        console.log(productItme)
    }

    // সম্পর্কিত প্রোডাক্ট গুলি (ধরা যাক, ক্যাটাগরি অনুযায়ী)
    const relatedProducts = allProducts.filter((p) => p.category === product.category && p._id !== product._id); // একই ক্যাটাগরির প্রোডাক্ট, বর্তমানে দেখানো প্রোডাক্টটি বাদ দিয়ে

    return (
        <>
            <div className="flex flex-col md:flex-row gap-8 p-6 mt-20 md:p-10 md:w-11/12 md:mx-auto md:mt-32 md:mb-20">
                {/* বাম পাশের ইমেজ সেকশন */}
                <div className="flex flex-col md:flex-row gap-3 md:w-1/2">
                    <div className="flex flex-row md:flex-col gap-3">
                        {images.map((img, index) => (
                            <img
                                key={index}
                                src={img}
                                alt={`Thumbnail ${index + 1}`}
                                className={`w-16 h-16 object-cover border rounded cursor-pointer ${selectedImage === img ? "border-black" : "border-gray-300"}`}
                                onClick={() => setSelectedImage(img)}
                            />
                        ))}
                    </div>
                    <img src={selectedImage} alt="Product" className="w-96 h-auto object-cover" />
                </div>

                {/* ডান পাশের প্রোডাক্ট ডিটেইলস */}
                <div className="w-full md:w-1/2">
                    <h2 className="text-xl font-bold">{product.name}</h2>
                    <p className="text-gray-500 text-sm">SKU: {product._id}</p>
                    <p className="text-2xl font-bold mt-2">৳ {product.price}</p>

                    <p className="mt-4 font-semibold">Color: {product.Color}</p>
                    <p className="mt-4">{product.details}</p>

                    <p className="mt-4 font-semibold">Size</p>
                    <div className="flex gap-2 mt-2">
                        {["XS", "S", "M", "L"].map((size) => (
                            <button
                                key={size}
                                className={`px-4 py-2 border rounded-full ${selectedSize === size ? "bg-red-500 text-white" : "border-gray-400"}`}
                                onClick={() => setSelectedSize(size)}
                            >
                                {size}
                            </button>
                        ))}
                    </div>

                    <button onClick={()=>handleAddToCard(product)} className="mt-5 w-full bg-black text-white py-3 text-lg font-semibold">
                        ADD TO BAG
                    </button>

                    <div className="mt-6 border-t pt-3">
                        <p className="font-semibold">Details</p>
                        <p className="font-semibold mt-3">Size Guide</p>
                        <p className="font-semibold mt-3">Availability In Store</p>
                    </div>
                </div>
            </div>

            {/* সম্পর্কিত প্রোডাক্টস সেকশন */}
            <div className="mt-10">
                <h3 className="text-xl font-semibold mb-4 text-center md:text-left md:ml-5">Related Products</h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-4 gap-8 m-2">
                    {relatedProducts.map((relatedProduct) => (
                        <Productsitem product={relatedProduct}></Productsitem>
                    ))}
                </div>
            </div>
        </>
    );
};

export default ProductsDetailsPage;
