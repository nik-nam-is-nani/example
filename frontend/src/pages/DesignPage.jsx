import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-white shadow-md fixed w-full z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold text-indigo-600">MyStore</h1>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Home</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Categories</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">About</a>
            <a href="#" className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium">Contact</a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-indigo-600 focus:outline-none"
            >
              {isOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Categories</a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="block text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  );
};

const Banner = () => {
  return (
    <section className="relative bg-gradient-to-r from-indigo-500 to-purple-600 text-white pt-20 pb-16 md:pt-24 md:pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight mb-4">
          Discover Amazing Products
        </h2>
        <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
          Shop the latest trends with unbeatable prices. Your satisfaction is our priority.
        </p>
        <a
          href="#"
          className="inline-block bg-white text-indigo-600 font-semibold px-8 py-3 rounded-md shadow hover:bg-gray-100 transition duration-300"
        >
          Shop Now
        </a>
      </div>
    </section>
  );
};

const CategoryCard = ({ title, description, imageAlt }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="h-48 bg-gray-200 flex items-center justify-center">
        {imageAlt ? (
          <img src={`https://via.placeholder.com/400x300?text=${encodeURIComponent(title)}`} alt={title} className="w-full h-full object-cover" />
        ) : (
          <svg className="h-16 w-16 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
          </svg>
        )}
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Shop {title}
        </a>
      </div>
    </div>
  );
};

const DesignPage = () => {
  const categories = [
    {
      title: 'Electronics',
      description: 'Cutting-edge gadgets and devices for your everyday needs.',
    },
    {
      title: 'Clothing',
      description: 'Stylish apparel for men and women, from casual to formal.',
    },
    {
      title: 'Home & Garden',
      description: 'Everything to make your home beautiful and comfortable.',
    },
    {
      title: 'Books',
      description: 'Explore a world of knowledge and imagination.',
    },
    {
      title: 'Sports & Outdoors',
      description: 'Gear up for your next adventure or workout.',
    },
    {
      title: 'Toys & Games',
      description: 'Fun for all ages, from board games to action figures.',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <Banner />
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Shop by Category
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <CategoryCard
              key={index}
              title={category.title}
              description={category.description}
              imageAlt={false}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default DesignPage;