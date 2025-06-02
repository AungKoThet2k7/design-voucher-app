import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import useSWR, { useSWRConfig } from "swr";
import toast from "react-hot-toast";
import { fetchProducts, updateProduct } from "../../../services/product";

const useProductEdit = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm();

  const navigate = useNavigate();

  const { mutate } = useSWRConfig();

  const { id } = useParams();

  const { data, isLoading, error } = useSWR(
    import.meta.env.VITE_API_URL + `/products/${id}`,
    fetchProducts
  );

  const productUpdatehandler = async (data) => {
    const res = await updateProduct(id, data.product_name, data.price);

    const json = await res.json();

    mutate(import.meta.env.VITE_API_URL + `/products/${id}`);

    if (data.back_to_product) {
      navigate("/dashboard/products");
    }

    if (res.status === 200) {
      toast.success(json.message);

      reset();
    } else {
      toast.error(json.message);
    }
  };
  return { register, handleSubmit, errors, isSubmitting, data ,isLoading, productUpdatehandler };
};

export default useProductEdit;
