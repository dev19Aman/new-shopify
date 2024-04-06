import React from 'react';
import ReactPaginate from 'react-paginate';

const CustomReactPaginate = ({
  pageCount,
  handlePageClick,
}) => {

  const shouldShowPagination = pageCount > 1;

  return (
    <>
    {shouldShowPagination && (
      <ReactPaginate
        breakLabel="..."
        nextLabel="Next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< Previous"
        renderOnZeroPageCount={null}
        previousClassName="px-1 md:px-3 text-xs md:text-sm py-1 bg-gray-200 text-gray-700 rounded mr-2"
        nextClassName="px-1 md:px-3 text-xs md:text-sm py-1 bg-gray-200 text-gray-700 rounded ml-2"
        breakClassName="px-1 md:px-3 text-xs md:text-sm py-1 bg-gray-200 text-gray-700 rounded mx-1"
        pageClassName="px-1 md:px-3 text-xs md:text-sm py-1 bg-gray-200 text-gray-700 rounded mx-1"
        containerClassName="flex items-center justify-center mt-4 flex-wrap"
        activeClassName="bg-blue-500 text-white"
      />
    )}
  </>
  );
};

export default CustomReactPaginate;
