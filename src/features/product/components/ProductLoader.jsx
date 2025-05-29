import React from "react";
import { useSearchParams } from "react-router-dom";

const ProductLoader = () => {

  const [params, setParams] = useSearchParams();
  const currentLimit = params.get("limit") ?? 5;

  return [...Array(Number(currentLimit))].map((_, i) => (
    <tr
      key={i}
      className="odd:bg-white even:bg-gray-50 border-b border-gray-200 animate-pulse"
    >
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        <div className="h-4 w-4 bg-gray-300 rounded"></div>
      </th>
      <td className="px-6 py-4">
        <div className="h-3 w-32 bg-gray-300 rounded"></div>
      </td>
      <td className="px-6 py-4">
        <div className="h-3 w-12 bg-gray-300 rounded"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="h-3 w-16 bg-gray-300 rounded mb-1"></div>
        <div className="h-3 w-16 bg-gray-300 rounded"></div>
      </td>
      <td className="px-6 py-4 text-end">
        <div className="inline-flex space-x-1">
          <div className="h-6 w-9 bg-gray-300 rounded"></div>
          <div className="h-6 w-9 bg-gray-300 rounded"></div>
        </div>
      </td>
    </tr>
  ));
};

export default ProductLoader;
