import React, { useState } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { HiOutlinePencil } from "react-icons/hi2";
import useSWR, { useSWRConfig } from "swr";
import { lineSpinner } from "ldrs";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
import useCookie from "react-use-cookie";
import ShowDate from "../../../components/showDate";
import { deleteProduct } from "../../../services/product";
import { TbListDetails } from "react-icons/tb";
import { deleteVoucher } from "../../../services/voucher";
import Avatar from "react-avatar";

lineSpinner.register();

const VoucherRow = ({
  voucher: { id,voucher_id, customer_name, customer_email, total, created_at },
}) => {
  // console.log(id);

  const { mutate } = useSWRConfig();

  const [isDeleting, setIsDeleting] = useState(false);

  const [token] = useCookie("token");

  const handleDelete = async () => {
    setIsDeleting(true);

    const res = await deleteVoucher(id);

    const json = await res.json();

    if (res.status === 200) {
      toast.success(json.message);
      mutate(import.meta.env.VITE_API_URL + "/vouchers");
    } else {
      toast.error(json.message);
    }
    setIsDeleting(false);
  };

  return (
    <tr className="odd:bg-white even:bg-gray-50  border-b border-gray-200">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {id}
      </th>
      <td className="px-6 py-4 font-bold text-gray-700 text-nowrap">{voucher_id}</td>
      <td className="px-6 py-4 font-bold text-gray-700 text-nowrap">
        <Avatar name={customer_name} size="30" round={true} /> {customer_name}
      </td>
      <td className="px-6 py-4 text-nowrap">{customer_email}</td>
      <td className="px-6 py-4 text-end text-nowrap">{total}</td>
      <td className="px-6 py-4 text-nowrap text-end">
        <ShowDate timestamp={created_at} />
      </td>
      <td className="px-6 py-4 text-end">
        <div
          className="inline-flex shadow-xs rounded-lg border border-gray-500"
          role="group"
        >
          <Link
            to={`/dashboard/voucher-detail/${id}`}
            type="button"
            className="size-8 border border-r-gray-500 rounded-lg rounded-r-none flex justify-center items-center text-sm font-medium text-sky-500 bg-white hover:bg-gray-200 hover:text-sky-700"
          >
            <TbListDetails />
          </Link>
          <button
            onClick={handleDelete}
            type="button"
            className="size-8 rounded-lg rounded-l-none flex justify-center items-center text-sm font-medium text-red-500 bg-white hover:bg-gray-200 hover:text-red-700"
          >
            {isDeleting ? (
              <l-line-spinner
                size="18"
                stroke="1"
                speed="1"
                color="red"
              ></l-line-spinner>
            ) : (
              <HiOutlineTrash />
            )}
          </button>
        </div>
      </td>
    </tr>
  );
};

export default VoucherRow;
