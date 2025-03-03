import React from "react";

const brands = [
  "Yellow",
  "Aarong",
  "Richman",
  "Ecstasy",
  "Sailor",
  "Cats Eye",
  "Lubnan",
  "Manyavar",
  "Fabindia",
  "Peter England",
];

const BrandName = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl md:text-5xl mt-20 font-bold text-center mb-10">Popular <span className="text-yellow-500">Punjabi</span> Brands</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:w-11/12 md:mx-auto">
        {brands.map((brand, index) => (
          <div
            key={index}
            className=" shadow-lg rounded-lg p-4 text-center text-lg font-semibold border hover:scale-105 transition-transform duration-300 cursor-pointer"
          >
            {brand}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BrandName;
