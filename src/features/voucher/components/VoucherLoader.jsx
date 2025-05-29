import React from "react";
import { useSearchParams } from "react-router-dom";

const VoucherLoader = () => {

  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5;

  return [...Array(Number(currentLimit))].map((_, i) => (
    <tr key={i} className="odd:bg-white even:bg-gray-50 border-b border-gray-200 animate-pulse">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <div className="h-4 w-10 bg-gray-300 rounded"></div>
      </th>
      <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap">
        <div className="h-4 w-20 bg-gray-300 rounded"></div>
      </td>
      <td className="px-6 py-4 font-bold text-gray-700 whitespace-nowrap flex items-center gap-2">
        <div className="w-8 h-8 bg-gray-300 rounded-full"></div>
        <div className="h-4 w-24 bg-gray-300 rounded"></div>
      </td>
      <td className="px-6 py-4 whitespace-nowrap">
        <div className="h-4 w-32 bg-gray-300 rounded"></div>
      </td>
      <td className="px-6 py-4 text-end whitespace-nowrap">
        <div className="h-4 w-16 bg-gray-300 rounded ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-end whitespace-nowrap">
        <div className="h-4 w-24 bg-gray-300 rounded ml-auto"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex shadow-xs rounded-lg border border-gray-300">
          <div className="size-8 bg-gray-300 rounded-l-lg"></div>
          <div className="size-8 bg-gray-300 rounded-r-lg"></div>
        </div>
      </td>
    </tr>
  ));
};

export default VoucherLoader;
