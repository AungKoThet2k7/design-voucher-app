import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Register } from "../../../services/auth";

const useRegister = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleRegister = async (data) => {
    const res = await Register(data);

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Account created successfully");
      navigate("/login");
    } else {
      toast.error(json.message);
    }
  };
  return { register, handleSubmit, isSubmitting, handleRegister };
};

export default useRegister;
