import { createBrowserRouter } from "react-router-dom";
import PublicLayout from "../features/public/components/PublicLayout";
import publicRoute from "./publicRoute";
import authRoute from "./authRoute";
import NotFoundPage from "../components/NotFoundPage";
import dashboardRoute from "./dashboardRoute";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFoundPage />,
    element: <PublicLayout />,
    children: [...publicRoute],
  },
  ...authRoute,
  ...dashboardRoute,
]);

export default router;
