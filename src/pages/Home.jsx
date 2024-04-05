import React, { useEffect, useState } from "react";
import LoadingItem from "../components/LoadingItem";
import CustomDatePicker from "../components/DatePicker";
import CustomReactPaginate from "../components/Pagination";
import { ShopifyRequest } from "../data";
import ShopifyContainer from "../components/grid-item/ShopifyContainer";

const Home = () => {

  const [platform, setPlatform] = useState('Shopify');
  const [data, setData] = useState([]);
  const [type, setType] = useState('Checkout-Request');
  const [amount, setAmount] = useState();
  const [sortOption, setSortOption] = useState('');
  const [limit, setLimit] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; 

  useEffect(() => {
    setIsLoading(true)
    setTimeout(() => {
        setData(ShopifyRequest);
        setIsLoading(false);
    }, 2000);
  }, [amount,currentPage]);



  const indexOfLastItem = (currentPage + 1) * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const pageCount = Math.ceil(data.length / itemsPerPage);

  const handlePageClick = ({ selected }) => {
    setCurrentPage(selected);
  };
  
  return (
    <>
      <main className="px-4 py-6 lg:mx-auto lg:w-[85%]">
        <h1 className="text-4xl text-center ">Shopify...</h1>
        <section className="mt-10 grid sm:grid-cols-2 md:grid-cols-4 w-full gap-5">
          <form className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Platform
            </label>
            <select
              id="platform"
              value={platform}
              onChange={(e) => setPlatform(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            >
              <option value="Shopify">Shopify</option>
              <option value="Magento">Magento</option>
              <option value="Woocommerce">Woocommerce</option>
              <option value="Bigcommerce">Bigcommerce</option>
            </select>
          </form>
          <form className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Type
            </label>
            <select
              id="type"
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
            >
              <option value="Checkout-Request">Checkout Request</option>
              <option value="Payment-Transactions">Payment Transactions</option>
            </select>
          </form>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Query
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5 "
              placeholder="Search by amount"
              required
            />
          </div>
          <div className="w-full">
            <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
              Date
            </label>

            <CustomDatePicker />
          </div>
          {/* </div> */}
          <aside className="flex gap-4">
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Sort
              </label>
              <select
                id="sortOption"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block w-full p-2.5"
              >
                <option value="Ascending">Ascending</option>
                <option value="Descending">Descending</option>
              </select>
            </div>
            <div className="w-full">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                Limit
              </label>
              <input
                type="number"
                id="limit"
                value={limit}
                onChange={(e) => setLimit(e.target.value)}
                className="w-full bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  block p-2.5"
                placeholder="John"
                required
              />
            </div>
          </aside>
        </section>

        <section className="mt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 w-full gap-6">
          {isLoading ? (
            // Render loading skeleton if data is still loading
            Array.from({ length: 6 }).map((_, index) => (
              <LoadingItem key={index} />
            ))
          ) : (
            // Render ItemContainer components if data is available
            currentItems.map((item, index) => (
              <ShopifyContainer key={index} data={item} />
            ))
          )}
        </section>

        <section className="mt-10 mb-10">
        <CustomReactPaginate
            pageCount={pageCount}
            handlePageClick={handlePageClick}
          />

        </section>
      </main>

    </>
  );
};

export default Home;
