import { Suspense, useEffect } from "react";
import Header from "./Header";
import { Navigate, Outlet } from "react-router-dom";

import { Toaster } from "react-hot-toast";
import useCookie from "react-use-cookie";
import useUserStore from "../../../stores/userUserStore";
import LoadingPage from "../../../components/LoadingPage";

const DashboardLayout = () => {
  const [token] = useCookie("token");

  const [userCookie] = useCookie("user");

  const { user, setUser } = useUserStore();

  useEffect(() => {
    setUser(JSON.parse(userCookie));
  }, []);

  if (!token) {
    return <Navigate to="/" />;
  }

  return (
    <main className="flex flex-col min-h-screen p-5">
      <Header />
      <Suspense fallback={<LoadingPage />}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" />
    </main>
  );
};

export default DashboardLayout;
