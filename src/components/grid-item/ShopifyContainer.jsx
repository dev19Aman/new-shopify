
import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const ShopifyContainer = ({ data }) => {

  const extractHostname = (url) => {
    let hostname;
    
    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }
    hostname = hostname.split(':')[0];
    hostname = hostname.split('?')[0];
    return hostname;
  };

  const formatNumber = (number) => {
    return Number(number).toFixed(2);
  };
  
  return (
    <Link to={`/magento/checkout-request/${data.id}`}>
      <article className="w-full bg-white shadow-lg border broder-gray-100 group cursor-pointer transform duration-500 hover:-translate-y-1"    >
        <div className="px-3 py-4">
          <h1 className="text-xl font-semibold text-gray-800 mt-4">
            {data?.customer?.shipping_address.given_name + " " + data?.customer?.shipping_address.family_name}
          </h1>
          <p className={pairCss}>
            <span className={keyCss}>Email:</span>  {data.customer?.email ? data.customer.email : '---'}
          </p>
          <p className={pairCss}>
            <span className={keyCss}>Testmode:</span> {" "}
            {data?.test ? (
              <FaCheckCircle className={`${keyCss} inline-block mr-2 text-green-500`} />
            ) : (
              <FaTimesCircle className={`${keyCss} inline-block mr-2 text-red-500`} />
            )}
          </p>
          <p className={pairCss}>
            <span className={keyCss}>Shop Name:</span> {extractHostname(data?.payment_method?.data?.cancel_url)}
          </p>
          <p className={pairCss}>
            <span className={keyCss}>Amount:</span> {formatNumber(data?.amount)}
          </p>
        </div>
          <div className=" flex flex-wrap lg:flex-nowrap w-full" >
            <img
              className="w-full max-h-[130px] object-cover"
              src="https://via.placeholder.com/250"
              alt="item_image"
            />
            <div className="bg-blue-50 pl-2 py-2 w-full">
              <div className="sm:flex sm:justify-between">
                <div>
                  <div className="text-base text-black font-semibold">Stylish Watch</div>
                  <div className="">
                    <div className="text-gray-600  md:text-sm mt-1">
                      <span className="font-semibold"> Quatity:</span> 2
                    </div>
                    <div className="text-gray-600 md:text-sm mt-1">
                      <span className="font-semibold"> Price:</span> 1704
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </article>
    </Link>

  );
};

export default ShopifyContainer;

const keyCss = "font-semibold text-gray-700";
const pairCss = "text-base text-gray-400 mt-2 leading-relaxed"
