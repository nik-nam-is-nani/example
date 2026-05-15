// Mock data and fetch simulator for product listing

const allProducts = [
  {
    id: 1,
    name: 'Smartphone X',
    category: 'Electronics',
    price: 799.99,
    rating: 4.5,
    image: 'https://via.placeholder.com/300x200?text=Smartphone',
    description: 'Latest smartphone with advanced features.',
  },
  {
    id: 2,
    name: 'Cotton T-Shirt',
    category: 'Clothing',
    price: 29.99,
    rating: 4.0,
    image: 'https://via.placeholder.com/300x200?text=T-Shirt',
    description: 'Comfortable cotton T-shirt available in multiple colors.',
  },
  {
    id: 3,
    name: 'Blender Pro',
    category: 'Home & Kitchen',
    price: 89.99,
    rating: 4.7,
    image: 'https://via.placeholder.com/300x200?text=Blender',
    description: 'High-performance blender for smoothies and more.',
  },
  {
    id: 4,
    name: 'JavaScript: The Good Parts',
    category: 'Books',
    price: 25.00,
    rating: 4.8,
    image: 'https://via.placeholder.com/300x200?text=Book',
    description: 'Essential reading for JavaScript developers.',
  },
  {
    id: 5,
    name: 'Yoga Mat',
    category: 'Sports',
    price: 19.99,
    rating: 4.2,
    image: 'https://via.placeholder.com/300x200?text=Yoga+Mat',
    description: 'Non-slip yoga mat for home workouts.',
  },
  {
    id: 6,
    name: 'Wireless Headphones',
    category: 'Electronics',
    price: 149.99,
    rating: 4.3,
    image: 'https://via.placeholder.com/300x200?text=Headphones',
    description: 'Noise-cancelling wireless headphones with long battery life.',
  },
  {
    id: 7,
    name: 'Denim Jacket',
    category: 'Clothing',
    price: 99.99,
    rating: 4.1,
    image: 'https://via.placeholder.com/300x200?text=Jacket',
    description: 'Classic denim jacket with a modern fit.',
  },
  {
    id: 8,
    name: 'Non-Stick Pan Set',
    category: 'Home & Kitchen',
    price: 59.99,
    rating: 4.6,
    image: 'https://via.placeholder.com/300x200?text=Pans',
    description: 'Set of 3 non-stick pans with even heat distribution.',
  },
];

// Simulate network delay
export const fetchProducts = (filters = {}) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      let filtered = [...allProducts];

      if (filters.category) {
        filtered = filtered.filter(
          (p) => p.category.toLowerCase() === filters.category.toLowerCase()
        );
      }

      if (filters.minPrice) {
        const min = parseFloat(filters.minPrice);
        if (!isNaN(min)) {
          filtered = filtered.filter((p) => p.price >= min);
        }
      }

      if (filters.maxPrice) {
        const max = parseFloat(filters.maxPrice);
        if (!isNaN(max)) {
          filtered = filtered.filter((p) => p.price <= max);
        }
      }

      if (filters.rating && filters.rating > 0) {
        filtered = filtered.filter((p) => p.rating >= filters.rating);
      }

      resolve(filtered);
    }, 500);
  });
};