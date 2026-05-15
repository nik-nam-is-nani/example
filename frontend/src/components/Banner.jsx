import React from 'react';

const Banner = () => {
  return (
    <div className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white overflow-hidden">
      <div className="absolute inset-0 bg-black opacity-20"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
            Welcome to MyBrand
          </h2>
          <p className="text-lg md:text-xl mb-8 opacity-90">
            Discover amazing products and services tailored just for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#"
              className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md shadow-lg hover:bg-gray-100 transition-colors text-center"
            >
              Get Started
            </a>
            <a
              href="#"
              className="inline-block bg-transparent border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white hover:text-indigo-600 transition-colors text-center"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;