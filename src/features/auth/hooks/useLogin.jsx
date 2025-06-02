import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import useCookie from "react-use-cookie";
import { Login } from "../../../services/auth";
import toast from "react-hot-toast";


const useLogin = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const [token, setToken] = useCookie("token");

  const [userCookie, setUserCookie] = useCookie("user");

  const handleLogin = async (data) => {
    const res = await Login(data);

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Login successfully");
      setToken(json.token);
      setUserCookie(JSON.stringify(json.user));
      navigate("/dashboard");
    } else {
      toast.error(json.message);
    }
  };
  return { register, handleSubmit, isSubmitting, handleLogin };
};

export default useLogin;