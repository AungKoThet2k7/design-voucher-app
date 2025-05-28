import React from "react";
import { Link } from "react-router-dom";

const ProductEmptyStage = () => {
  return (
    <tr className="odd:bg-white  even:bg-gray-50  border-b border-gray-200">
      <td colSpan={6} className="px-6 py-4 text-center font-sans text-gray-600">
        There is no Product yet.{" "}
        <Link
          to="/dashboard/product-create"
          className="text-sky-500 hover:underline"
        >
          Create new product?
        </Link>
      </td>
    </tr>
  );
};

export default ProductEmptyStage;
