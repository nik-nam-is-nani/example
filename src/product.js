import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import defaultProducts from './productsData';

const ProductCard = ({ product, onAddToCart }) => {
  const { name, price, image, description } = product;

  return (
    <div className="rounded-lg border border-gray-200 bg-white shadow-sm transition hover:shadow-lg">
      <div className="aspect-w-4 aspect-h-3 overflow-hidden rounded-t-lg">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover"
          loading="lazy"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
        <p className="mt-1 text-sm text-gray-500 line-clamp-2">{description}</p>
        <div className="mt-2 flex items-center justify-between">
          <span className="text-xl font-bold text-gray-900">${price.toFixed(2)}</span>
          <button
            onClick={() => onAddToCart(product)}
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 transition"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    image: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
  onAddToCart: PropTypes.func.isRequired,
};

const ProductGrid = ({ products, loading: externalLoading, error: externalError }) => {
  const [localProducts, setLocalProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // If products prop is provided, use it directly; otherwise fetch mock data
  useEffect(() => {
    if (products) {
      setLocalProducts(products);
      return;
    }
    // Simulate API fetch with loading state
    setLoading(true);
    setError(null);
    const timer = setTimeout(() => {
      try {
        setLocalProducts(defaultProducts);
        setLoading(false);
      } catch (err) {
        setError('Failed to load products.');
        setLoading(false);
      }
    }, 500);
    return () => clearTimeout(timer);
  }, [products]);

  const handleAddToCart = (product) => {
    // Placeholder: In a real app, dispatch to cart context or call API
    console.log(`Added ${product.name} to cart`);
  };

  // Use external loading/error if provided, else local state
  const isLoading = externalLoading !== undefined ? externalLoading : loading;
  const hasError = externalError !== undefined ? externalError : error;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center py-16">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600"></div>
      </div>
    );
  }

  if (hasError) {
    return (
      <div className="text-center py-16">
        <p className="text-red-500 text-lg">{hasError}</p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 rounded-md bg-indigo-600 px-4 py-2 text-sm font-medium text-white hover:bg-indigo-700 transition"
        >
          Retry
        </button>
      </div>
    );
  }

  if (!localProducts || localProducts.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No products found.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
      {localProducts.map((product) => (
        <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
      ))}
    </div>
  );
};

ProductGrid.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
      image: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ),
  loading: PropTypes.bool,
  error: PropTypes.string,
};

export default ProductGrid;
