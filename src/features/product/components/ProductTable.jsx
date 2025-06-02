import { HiSearch } from "react-icons/hi";
import { Link } from "react-router-dom";
import ProductLoader from "./ProductLoader";
import ProductRow from "./ProductRow";
import ProductEmptyStage from "./ProductEmptyStage";
import Pagination from "../../../components/Pagination";
import Sortable from "../../../components/Sortable";
import useProduct from "../hooks/useProduct";

const ProductTable = () => {
  const { data, isLoading, updateFetchUrl, handleSort, handleSearch } =
    useProduct();

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <div className="relative max-w-sm">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <HiSearch className="text-gray-500" />
          </div>
          <input
            onChange={handleSearch}
            type="text"
            id="simple-search"
            className="bg-gray-50 focus-visible:outline-none border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-500 focus:border-sky-500 block w-full ps-10 p-2.5  "
            placeholder="Search Product"
          />
        </div>
        <Link
          to="/dashboard/product-create"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-sky-500 rounded-lg border border-sky-500 hover:bg-sky-700"
        >
          Add new Product
        </Link>
      </div>

      <div className="relative overflow-x-auto rounded-lg shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-200 ">
            <tr>
              <th scope="col" className="px-6 py-3">
                <Sortable handleSort={handleSort} sort_by="id">
                  #
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                <Sortable handleSort={handleSort} sort_by="product_name">
                  Product Name
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                <Sortable handleSort={handleSort} sort_by="price" align="right">
                  Price
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Created at
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Updated at
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <ProductLoader />
            ) : data?.data?.length === 0 ? (
              <ProductEmptyStage />
            ) : (
              data?.data?.map((product) => (
                <ProductRow key={product.id} product={product} />
              ))
            )}
          </tbody>
        </table>
      </div>
      {/* {!isLoading && ( */}
      <Pagination
        links={data?.links}
        meta={data?.meta}
        updateFetchUrl={updateFetchUrl}
      />
      {/* )} */}
    </div>
  );
};

export default ProductTable;
