import React from "react";

const categories = [
  { name: "MEN", img: "https://d1190btxnvweoc.cloudfront.net/uploads/all/XrVDOhv7bymaGP9stUgLxHiI1FiSdQjCv6wnK4va.jpg" },
  { name: "WOMEN", img: "https://d1190btxnvweoc.cloudfront.net/uploads/all/rRX8Vds1I1OjFLEjJdn0dhUzGO1axsiPUPHVQkza.jpg" },
  { name: "SPRING 2025", img: "https://d1190btxnvweoc.cloudfront.net/uploads/all/YgivDJ4bMFZJfJpEiYBTESaN633688AYNvoSvdab.jpg" },
  { name: "BOY'S SET", img: "https://d1190btxnvweoc.cloudfront.net/uploads/all/4Sou0O3vlFf8nuZW9AzTdz6mAW8M64R6pcLpTfJx.jpg" },
  { name: "GIRL'S SET", img: "https://d1190btxnvweoc.cloudfront.net/uploads/all/gAheNemuy6qGy1eqyDj7fVFB6JZxWbl7NvUVJBWD.jpg" },
];

const TrendingCategories = () => {
  return (
    <section className="w-11/12 mx-auto py-12">
      <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
        Trending Categories
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
        {categories.map((category, index) => (
          <div
            key={index}
            className="relative group cursor-pointer overflow-hidden rounded-xl shadow-lg"
          >
            <img
              src={category.img}
              alt={category.name}
              className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-white px-4 py-2 text-black font-semibold rounded-lg shadow-md">
              {category.name}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TrendingCategories;
