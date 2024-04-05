import React from "react";
import { useParams } from "react-router-dom";
import { CheckoutDetail } from "../data";

const ProductDetail = () => {


  const params = useParams()
const {id} = params
 const checkoutItem = CheckoutDetail.find(item => item._id === id);

 if (!checkoutItem) {
  return (
    <div className="bg-red-100 border text-center border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
      <strong className="font-bold">Error:</strong>
      <span className="block sm:inline"> No data found for this ID.</span>
    </div>
  );
}

const {shopName,amount,shippingCost,discountAmount,checkoutData,discountName,shippingMethod} = checkoutItem

const formatNumber = (number) => {
  return Number(number).toFixed(2);
};


  return (
    <div className="bg-gray-100 py-8 md:h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div className="h-[400px] rounded-lg bg-gray-300 dark:bg-gray-700 mb-4">
              <img
                className="w-full h-full object-cover"
                src={checkoutData[0]?.imageURL}
                alt="checkout-request-detail"
              />
            </div>
            <div className="flex -mx-2 mb-4">
              <div className="w-1/2 px-2">
                <button className="text-sm sm:text-base w-full bg-gray-900 dark:bg-gray-600 text-white py-2 px-4 rounded-full font-semibold hover:bg-gray-800 dark:hover:bg-gray-700">
                  Add to Cart
                </button>
              </div>
              <div className="w-1/2 px-2">
                <button className="w-full text-sm sm:text-lg bg-gray-200 text-gray-800  py-2 px-4 rounded-full font-semibold hover:bg-gray-300 ">
                  Add to Wishlist
                </button>
              </div>
            </div>
          </div>
          <div className="md:flex-1 px-4">
            <h2 className="text-2xl md:text-3xl  font-semibold text-gray-800 dark:text-white mb-2">
              {shopName}
            </h2>
            <div className={flexCss}>
              <div className="mr-4">
                <span className={keyCss}>
                  Amount:
                </span>
                <span className="text-gray-600 dark:text-gray-300"> {formatNumber(amount)}</span>
              </div>
              <div>
                <span className={keyCss}>
                  Shipping cost:
                </span>
                <span className="text-gray-600 dark:text-gray-300"> {formatNumber(shippingCost)} </span>
              </div>
            </div>
            <div className={flexCss}>
              <div className="mr-4">
                <span className={keyCss}>
                  Discount Name:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}
               {discountName}
                </span>
              </div>
              <div>
                <span className={keyCss}>
                  Discount Amount:
                </span>
                <span className="text-gray-600 dark:text-gray-300"> {formatNumber(discountAmount)}</span>
              </div>
            </div>
            <div className={flexCss}>
              <div className="mr-4">
                <span className={keyCss}>
                  shipping Method:
                </span>
                <span className="text-gray-600 dark:text-gray-300">
                  {" "}
               {shippingMethod}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <span className="font-semibold text-xl text-gray-700 dark:text-gray-300">
                Product Details
              </span>

              <div className="mb-3 mt-2">
                <span className={keyCss}>
                  {checkoutData[0]?.productTitle}
                </span>
              </div>
              <div className="flex mb-3">
                <div className="mr-4">
                  <span className={keyCss}>
                    Price:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                  {formatNumber(checkoutData[0]?.price)}
                    </span>
                </div>
                <div>
                  <span className={keyCss}>
                    Quatity:
                  </span>
                  <span className="text-gray-600 dark:text-gray-300">
                  {formatNumber(checkoutData[0]?.qty)}
                     </span>
                </div>
              </div>
              <span className={keyCss}>
                Description:
              </span>
              <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
                ante justo. Vivamus commodo nulla ut lorem rhoncus aliquet. Duis
                dapibus augue vel ipsum pretium, et venenatis sem blandit.
                Quisque ut erat vitae.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

const flexCss = "flex mb-3 flex-col sm:flex-row gap-2 sm:gap-0"
const keyCss = "font-semibold text-gray-700 dark:text-gray-300 "
