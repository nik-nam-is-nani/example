import React from 'react';

const Integration = ({ title, description, children }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h2 className="text-xl font-semibold text-gray-900 mb-2">
        {title || 'Backend Integration'}
      </h2>
      <p className="text-gray-600 mb-4">
        {description || 'Connect frontend/backend, setup database connection and API handling.'}
      </p>
      {children}
    </div>
  );
};

export default Integration;
