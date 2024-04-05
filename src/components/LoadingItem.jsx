import React from 'react';

const LoadingItem = () => {
  return (
    <div className="p-6 bg-white dark:bg-gray-800 shadow rounded-md">
      <div className="animate-pulse flex flex-col space-y-4">
        <div className="h-20 bg-gray-200 dark:bg-gray-600 rounded"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-1/2"></div>
        <div className="h-4 bg-gray-200 dark:bg-gray-600 rounded w-3/4"></div>
      </div>
    </div>
  );
};

export default LoadingItem;
