import { lazy, Suspense } from "react";
import LoadingPage from "../components/LoadingPage";

const RegisterPage = lazy(() => import("../features/auth/pages/RegisterPage"));
const LoginPage = lazy(() => import("../features/auth/pages/LoginPage"));

const authRoute = [
  {
    path: "/register",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <RegisterPage />
      </Suspense>
    ),
  },
  {
    path: "/login",
    element: (
      <Suspense fallback={<LoadingPage />}>
        <LoginPage />
      </Suspense>
    ),
  },
];

export default authRoute;
