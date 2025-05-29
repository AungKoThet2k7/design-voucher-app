import { useNavigate } from "react-router-dom";
import { removeCookie } from "react-use-cookie";

const LogoutBtn = () => {
  const navigate = useNavigate();
  const hadleLogout = () => {
    removeCookie("token");
    removeCookie("user");
    navigate("/");
  };

  return (
    <button
      onClick={hadleLogout}
      className=" text-sky-500 bg-white border border-sky-500 hover:bg-sky-600 hover:text-white focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
    >
      Logout
    </button>
  );
};

export default LogoutBtn;
