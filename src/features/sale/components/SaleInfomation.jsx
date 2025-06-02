import { lineSpinner } from "ldrs";
import BtnSpinner from "../../../components/BtnSpinner";
import useSaleInfo from "../hooks/useSaleInfo";

lineSpinner.register();

const SaleInfomation = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    onSubmit,
    generateInvoiceNumber,
  } = useSaleInfo();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col h-full"
      id="infoForm"
    >
      <div className="grid grid-cols-1 gap-5">
        <div className="col-span-1">
          <div className="">
            <label
              htmlFor="voucher_id"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Voucher Id
            </label>
            <input
              {...register("voucher_id", {
                required: true,
              })}
              type="text"
              id="voucher_id"
              defaultValue={generateInvoiceNumber()}
              className={`bg-gray-50 border ${
                errors.voucher_id ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg block w-full pointer-events-none p-2.5 focus-visible:outline-none`}
              placeholder="eg: 001"
            />
            {errors.voucher_id?.type === "required" && (
              <p className="mt-2 text-sm text-red-600">
                Voucher Id is required
              </p>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <div className="">
            <label
              htmlFor="customer_name"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Customer Name
            </label>
            <input
              {...register("customer_name", {
                required: true,
              })}
              type="text"
              id="customer_name"
              className={`bg-gray-50 border ${
                errors.customer_name ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none`}
              placeholder="eg: Kyaw Kyaw"
            />
            {errors.customer_name?.type === "required" && (
              <p className="mt-2 text-sm text-red-600">
                Customer Name is required
              </p>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <div className="">
            <label
              htmlFor="customer_email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Customer Email
            </label>
            <input
              {...register("customer_email", {
                required: true,
              })}
              type="email"
              id="customer_email"
              className={`bg-gray-50 border ${
                errors.customer_email ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none`}
              placeholder="eg: kyaw@gmail.com"
            />
            {errors.customer_email?.type === "required" && (
              <p className="mt-2 text-sm text-red-600">
                Customer Email is required
              </p>
            )}
          </div>
        </div>
        <div className="col-span-1">
          <div className="mb-5">
            <label
              htmlFor="sale_date"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Sale Date
            </label>
            <input
              {...register("sale_date", {
                required: true,
              })}
              type="date"
              id="sale_date"
              defaultValue={new Date().toISOString().slice(0, 10)}
              className={`bg-gray-50 border ${
                errors.sale_date ? "border-red-500" : "border-gray-300"
              } text-gray-900 text-sm rounded-lg block w-full p-2.5 focus-visible:outline-none`}
              placeholder="eg: 1/Sept/2025"
            />
            {errors.sale_date?.type === "required" && (
              <p className="mt-2 text-sm text-red-600">Sale date is required</p>
            )}
          </div>
        </div>
      </div>
      <div className="flex mt-auto flex-col justify-end items-end gap-3">
        <div className="flex items-center gap-2">
          <label
            htmlFor="all_correct"
            className="text-sm font-medium text-gray-900"
          >
            Make sure all field are correct
          </label>
          <input
            {...register("all_correct")}
            id="all_correct"
            form="infoForm"
            type="checkbox"
            required
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
          />
        </div>
        <div className="flex items-center gap-2">
          <label
            htmlFor="redirect_voucher_detail"
            className="text-sm font-medium text-gray-900"
          >
            Redirect to Voucher Detail
          </label>
          <input
            {...register("redirect_voucher_detail")}
            id="redirect_voucher_detail"
            form="infoForm"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm"
          />
        </div>
        <button
          type="submit"
          form="infoForm"
          className="px-4 py-2 flex items-center gap-1 text-sm font-medium text-white bg-sky-500 rounded-lg border border-sky-500 hover:bg-sky-700"
        >
          Confirm Voucher
          {isSubmitting && <BtnSpinner />}
        </button>
      </div>
    </form>
  );
};

export default SaleInfomation;
