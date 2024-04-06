import React, { useEffect, useState } from "react";
import CustomReactPaginate from "../components/custom/Pagination";
import { ShopifyRequest } from "../data";
import QueryContainer from "../components/QueryContainer";
import Loading from "../components/custom/Loading";
import VirtualizedTable from "../components/VirtualizedTable";

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
       <QueryContainer  
          platform
          setPlatform
          type
          setType
          amount
          setAmount
          sortOption
          setSortOption
          limit
          setLimit
          />
          {isLoading ? (
              <Loading />
          ) : (
          <VirtualizedTable currentItems={currentItems}/>
        
          )}

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
