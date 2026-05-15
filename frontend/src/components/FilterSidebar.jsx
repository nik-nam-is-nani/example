import React from 'react';

const categories = ['Electronics', 'Clothing', 'Home & Kitchen', 'Books', 'Sports'];

const FilterSidebar = ({ filters, onFilterChange }) => {
  const handleCategoryChange = (e) => {
    onFilterChange({ category: e.target.value });
  };

  const handleMinPriceChange = (e) => {
    onFilterChange({ minPrice: e.target.value });
  };

  const handleMaxPriceChange = (e) => {
    onFilterChange({ maxPrice: e.target.value });
  };

  const handleRatingChange = (e) => {
    onFilterChange({ rating: Number(e.target.value) });
  };

  const handleReset = () => {
    onFilterChange({ category: '', minPrice: '', maxPrice: '', rating: 0 });
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-gray-900 mb-4">Filters</h2>
      
      {/* Category */}
      <div className="mb-6">
        <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          id="category"
          value={filters.category}
          onChange={handleCategoryChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <span className="block text-sm font-medium text-gray-700 mb-1">Price Range</span>
        <div className="flex items-center gap-2">
          <input
            type="number"
            placeholder="Min"
            value={filters.minPrice}
            onChange={handleMinPriceChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
          <span className="text-gray-500">-</span>
          <input
            type="number"
            placeholder="Max"
            value={filters.maxPrice}
            onChange={handleMaxPriceChange}
            className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-6">
        <label htmlFor="rating" className="block text-sm font-medium text-gray-700 mb-1">
          Minimum Rating
        </label>
        <select
          id="rating"
          value={filters.rating}
          onChange={handleRatingChange}
          className="w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-sm"
        >
          <option value={0}>Any</option>
          <option value={1}>1 ★</option>
          <option value={2}>2 ★</option>
          <option value={3}>3 ★</option>
          <option value={4}>4 ★</option>
          <option value={5}>5 ★</option>
        </select>
      </div>

      <button
        onClick={handleReset}
        className="w-full bg-gray-200 text-gray-700 py-2 px-4 rounded-lg hover:bg-gray-300 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2"
      >
        Reset Filters
      </button>
    </div>
  );
};

export default FilterSidebar;