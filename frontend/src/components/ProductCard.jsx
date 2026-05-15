import React from 'react';

const ProductCard = ({ product }) => {
  const { image, name, price, rating, description } = product;
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <img src={image} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900 truncate">{name}</h3>
        <p className="mt-1 text-sm text-gray-600 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-indigo-600">${price.toFixed(2)}</span>
          <span className="flex items-center text-sm text-yellow-500">
            {'★'.repeat(Math.floor(rating))}{'☆'.repeat(5 - Math.floor(rating))}
            <span className="ml-1 text-gray-500">({rating})</span>
          </span>
        </div>
        <button className="mt-4 w-full bg-indigo-600 text-white py-2 px-4 rounded-lg hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;