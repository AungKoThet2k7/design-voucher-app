import { useForm } from "react-hook-form";
import useSaleProductStore from "../../../stores/useSaleProductStore";
import { useNavigate } from "react-router-dom";
import { storeVoucher } from "../../../services/voucher";
import toast from "react-hot-toast";

const useSaleInfo = () => {
    const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();


  const { records, resetRecords } = useSaleProductStore();

  const navigate = useNavigate();

  const onSubmit = async (data) => {
    const total = records.reduce((a, b) => a + b.cost, 0);
    const tax = total * 0.07;
    const net_total = total + tax;

    const currrentVoucher = { ...data, records, total, tax, net_total };

    const res = await storeVoucher(currrentVoucher);

    const json = await res.json();

    if (res.status === 200 || res.status === 201) {
      toast.success(json.message);
    } else {
      toast.error(json.message);
    }

    if (data.redirect_voucher_detail) {
      navigate(`/dashboard/voucher-detail/${json.data.id}`);
    }

    resetRecords();
    reset();
  };

  const generateInvoiceNumber = () => {
    const prefix = "INV";
    const timestamp = Date.now().toString().slice(-6); // Last 6 digits of timestamp
    const randomNum = Math.floor(1000 + Math.random() * 9000); // 4-digit random number
    return `${prefix}-${timestamp}-${randomNum}`;
  };
  return { register, handleSubmit, errors, isSubmitting, onSubmit, generateInvoiceNumber };
};

export default useSaleInfo;
