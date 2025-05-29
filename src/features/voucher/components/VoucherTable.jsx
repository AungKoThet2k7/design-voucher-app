import React, { useState } from "react";
import { HiSearch } from "react-icons/hi";
import useSWR from "swr";
import { Link, useLocation, useSearchParams } from "react-router-dom";

import { debounce, set } from "lodash";
import Pagination from "../../../components/Pagination";
import { urlToParamObject } from "../../../utils/url";
import Sortable from "../../../components/Sortable";
import VoucherRow from "./voucherRow";
import VoucherLoader from "./voucherLoader";
import { fetchVouchers } from "../../../services/voucher";
import VoucherEmptyStage from "./VoucherEmptyStage";

const VoucherTable = () => {
  const location = useLocation();

  const [params, setParams] = useSearchParams();

  const [fetchUrl, setFetchUrl] = useState(
    import.meta.env.VITE_API_URL + "/vouchers" + location.search
  );

  const { data, error, isLoading } = useSWR(fetchUrl, fetchVouchers);

  const handleSearch = debounce((e) => {
    if (e.target.value) {
      setParams({ q: e.target.value });
      setFetchUrl(
        import.meta.env.VITE_API_URL + `/vouchers?q=${e.target.value}`
      );
    } else {
      setParams({});
      setFetchUrl(import.meta.env.VITE_API_URL + "/vouchers");
    }
  }, 500);

  const updateFetchUrl = (url) => {
    setParams(urlToParamObject(url));
    setFetchUrl(url);
  };

  const handleSort = (sortData) => {
    const sortParams = new URLSearchParams(sortData).toString();
    setParams(sortData);
    setFetchUrl(import.meta.env.VITE_API_URL + `/vouchers?${sortParams}`);
  };

  // if (isLoading) return <div>Loading...</div>;

  // console.log(data);

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
            placeholder="Search Vouchers"
          />
        </div>
        <Link
          to="/dashboard/sale"
          className="p-2.5 ms-2 text-sm font-medium text-white bg-sky-500 rounded-lg border border-sky-500 hover:bg-sky-700"
        >
          Create Sale
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
                <Sortable handleSort={handleSort} sort_by="voucher_id">
                  Voucher ID
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                <Sortable handleSort={handleSort} sort_by="customer_name" align="right">
                  Customer Name
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap">
                Customer Email
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                <Sortable handleSort={handleSort} sort_by="total" align="right">
                  Total
                </Sortable>
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Created at
              </th>
              <th scope="col" className="px-6 py-3 text-nowrap text-end">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <VoucherLoader />
            ) : data?.data?.length === 0 ? (
              <VoucherEmptyStage />
            ) : (
              data?.data?.map((voucher) => (
                <VoucherRow key={voucher.id} voucher={voucher} />
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

export default VoucherTable;
