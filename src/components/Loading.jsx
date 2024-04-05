import React from 'react';

const Loading = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-gray-900"></div>
      <div className="ml-4 text-lg font-semibold text-gray-900 dark:text-white">Shopify...</div>
    </div>
  );
};

export default Loading;
