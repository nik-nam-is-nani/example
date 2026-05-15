import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import CategoryCards from '../components/CategoryCards';

const DesignPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main>
        <Banner />
        <section className="container mx-auto px-4 py-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
            Explore Our Categories
          </h2>
          <CategoryCards />
        </section>
      </main>
      <footer className="bg-gray-800 text-white py-6 text-center">
        <p>&copy; 2025 MyBrand. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DesignPage;