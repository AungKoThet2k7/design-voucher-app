import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { storeProducts } from "../../../services/product";

const useProductCreate = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const handleCreateProduct = async (data) => {
    const res = await storeProducts(data.product_name, data.price);

    const json = await res.json();

    if (data.back_to_product) {
      navigate("/dashboard/products");
    }

    if (res.status === 200 || res.status === 201) {
      toast.success(json.message);
      reset();
    } else {
      toast.error(json.message);
    }
  };
  return { register, handleSubmit, errors, isSubmitting, handleCreateProduct };
};

export default useProductCreate;
