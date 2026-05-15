import React from 'react';

const categories = [
  {
    title: 'Technology',
    description: 'Latest gadgets, software, and innovation.',
    icon: '💻',
    color: 'blue'
  },
  {
    title: 'Fashion',
    description: 'Trendy clothing, accessories, and styles.',
    icon: '👗',
    color: 'pink'
  },
  {
    title: 'Home & Living',
    description: 'Furniture, decor, and household essentials.',
    icon: '🏠',
    color: 'green'
  },
  {
    title: 'Health & Beauty',
    description: 'Skincare, wellness, and personal care.',
    icon: '🌿',
    color: 'yellow'
  },
  {
    title: 'Sports',
    description: 'Equipment, apparel, and outdoor gear.',
    icon: '⚽',
    color: 'orange'
  },
  {
    title: 'Entertainment',
    description: 'Books, movies, music, and games.',
    icon: '🎮',
    color: 'purple'
  }
];

const colorClasses = {
  blue: 'from-blue-400 to-blue-600',
  pink: 'from-pink-400 to-pink-600',
  green: 'from-green-400 to-green-600',
  yellow: 'from-yellow-400 to-yellow-600',
  orange: 'from-orange-400 to-orange-600',
  purple: 'from-purple-400 to-purple-600'
};

const CategoryCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {categories.map((category, index) => (
        <div
          key={index}
          className="relative group bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
        >
          <div className={`bg-gradient-to-br ${colorClasses[category.color]} p-6 flex items-center justify-center`}>
            <span className="text-6xl">{category.icon}</span>
          </div>
          <div className="p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{category.title}</h3>
            <p className="text-gray-600">{category.description}</p>
          </div>
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300 rounded-xl"></div>
        </div>
      ))}
    </div>
  );
};

export default CategoryCards;