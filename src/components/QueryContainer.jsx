import CustomDatePicker from "./DatePicker"

const QueryContainer =({
    platform,
    setPlatform,
    type,
    setType,
    amount,
    setAmount,
    sortOption,
    setSortOption,
    limit,
    setLimit
})=>{
    return(
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

    )
}

export default QueryContainer