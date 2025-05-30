import DashboardLayout from "../features/dashboard/components/DashboardLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import productRoute from "./productRoute";
import saleRoute from "./saleRoute";
import userProfileRoute from "./user-profileRoute";
import voucherRoute from "./voucherRoute";

const dashboardRoute = [
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardPage />,
      },
      ...productRoute,
      ...voucherRoute,
      ...saleRoute,
      ...userProfileRoute,
    ],
  },
];

export default dashboardRoute;
