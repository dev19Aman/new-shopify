import React from "react";
import { Link } from "react-router-dom";
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';

const MagentoContainer = ({ data }) => {


  const extractHostname = (url) => {
    let hostname;
    // Find & remove protocol (http, ftp, etc.) and get hostname
    if (url.indexOf('//') > -1) {
      hostname = url.split('/')[2];
    } else {
      hostname = url.split('/')[0];
    }
    // Find & remove port number
    hostname = hostname.split(':')[0];
    // Find & remove query parameters
    hostname = hostname.split('?')[0];
    return hostname;
  };

  return (
    <Link to={`/magento/checkout-request/${data}`}>
      <article className="w-full bg-white shadow-lg border broder-gray-100 group cursor-pointer transform duration-500 hover:-translate-y-1"    >
        <div className="px-3 py-4">
          <h1 className="text-xl font-semibold text-gray-800 mt-4">
            {data?.billing?.firstname + " " + data?.billing?.lastname}
          </h1>
          <p className={pairCss}>
            <span className={keyCss}>Email:</span>  {data.email ? data.email : '---'}
          </p>
          <p className={pairCss}>
            <span className={keyCss}>Testmode:</span> {" "}
            {data.testmode ? (
              <FaCheckCircle className={`${keyCss} inline-block mr-2 text-green-500`} />
            ) : (
              <FaTimesCircle className={`${keyCss} inline-block mr-2 text-red-500`} />
            )}
          </p>
          <p className={pairCss}>
            <span className={keyCss}>Shop Name:</span> {extractHostname(data.complete_url)}
          </p>
          <p className={pairCss}>
            <span className={keyCss}>Amount:</span> {data.amounttotal}
          </p>
        </div>
        {data.items.map((i) => (
          <div className=" flex flex-wrap lg:flex-nowrap w-full" key={i._id}>
            <img
              className="w-full max-h-[130px] object-cover"
              src={i.itemimageurl}
              alt="item_image"
            />
            <div className="bg-blue-50 pl-2 py-2 w-full">
              <div className="sm:flex sm:justify-between">
                <div>
                  <div className="text-base text-black font-semibold">{i.itemname}</div>
                  <div className="">
                    <div className="text-gray-600  md:text-sm mt-1">
                      <span className="font-semibold"> Quatity:</span> {i.quantity}
                    </div>
                    <div className="text-gray-600 md:text-sm mt-1">
                      <span className="font-semibold"> Price:</span> {i.unitprice}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </article>
    </Link>

  );
};

export default MagentoContainer;

const keyCss = "font-semibold text-gray-700";
const pairCss = "text-base text-gray-400 mt-2 leading-relaxed"
