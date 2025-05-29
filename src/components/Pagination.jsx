import React from "react";
import {
  HiArrowLeft,
  HiArrowRight,
  HiChevronDoubleLeft,
  HiChevronDoubleRight,
  HiChevronLeft,
  HiChevronRight,
} from "react-icons/hi2";
import { useSearchParams } from "react-router-dom";

const Pagination = ({
  links: { prev, next, first, last } = {
    prev: null,
    next: null,
    first: null,
    last: null,
  },
  meta: { from, to, total, links, current_page, last_page, path } = {
    from: 0,
    to: 0,
    total: 0,
    links: [],
    current_page: 1,
    last_page: 1,
    path: "",
  },
  updateFetchUrl,
}) => {
  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5;
  const pageLimits = [5, 10, 20, 30, 50];

  const handleRowLimitSelect = (e) => {
    setParams({ page: 1, limit: e.target.value });
    updateFetchUrl(`${path}?page=1&limit=${e.target.value}`);
  };

  return (
    <div>
      <div className="flex justify-between items-center mt-2 xs:mt-0">
        <span className="text-sm text-gray-700">
          Showing <b>{from}</b> to <b>{to}</b> of <b>{total}</b> Entries
        </span>

        <div className="flex items-center justify-center gap-3">

          <div className=" flex items-center gap-2">
          <label
          
            className="block text-gray-700 text-sm text-nowrap dark:text-white"
          >
            Rows per page
          </label>
          <select
            onChange={handleRowLimitSelect}
            className="flex items-center justify-center h-9 text-sm font-medium border-y border rounded-lg border-gray-200  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white disabled:opacity-50 disabled:pointer-events-none"
            value={currentLimit}
          >
            {pageLimits.map((limit, index) => (
              <option key={index} value={limit}>
                {limit}
              </option>
            ))}
          </select>
        </div>


          <span className="text-sm text-gray-700">
            Pages <b>{current_page}</b> of <b>{last_page}</b>
          </span>

          <div className="inline-flex shadow-xs rounded-lg">
            <button
              onClick={() => updateFetchUrl(first)}
              disabled={!first}
              className={`bg-white hover:bg-sky-200 first:rounded-lg last:rounded-lg first:rounded-r-none last:rounded-l-none border border-gray-500 border-r-0 last:border size-8 flex justify-center items-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50`}
            >
              <HiChevronDoubleLeft />
            </button>
            <button
              onClick={() => updateFetchUrl(prev)}
              disabled={!prev}
              className={`bg-white hover:bg-sky-200 first:rounded-lg last:rounded-lg first:rounded-r-none last:rounded-l-none border border-gray-500 border-r-0 last:border size-8 flex justify-center items-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50`}
            >
              <HiChevronLeft />
            </button>
            <button
              onClick={() => updateFetchUrl(next)}
              disabled={!next}
              className={`bg-white hover:bg-sky-200 first:rounded-lg last:rounded-lg first:rounded-r-none last:rounded-l-none border border-gray-500 border-r-0 last:border size-8 flex justify-center items-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50`}
            >
              <HiChevronRight />
            </button>
            <button
              onClick={() => updateFetchUrl(last)}
              disabled={!last}
              className={`bg-white hover:bg-sky-200 first:rounded-lg last:rounded-lg first:rounded-r-none last:rounded-l-none border border-gray-500 border-r-0 last:border size-8 flex justify-center items-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50`}
            >
              <HiChevronDoubleRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
