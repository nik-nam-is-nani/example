import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Integration = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/items');
        setItems(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItems();
  }, []);

  if (loading) return <div className='p-4'>Loading...</div>;
  if (error) return <div className='p-4 text-red-500'>Error: {error}</div>;

  return (
    <div className='p-6'>
      <h1 className='text-2xl font-bold mb-4'>Items List</h1>
      <ul className='space-y-2'>
        {items.map((item, index) => (
          <li key={index} className='border p-2 rounded'>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Integration;