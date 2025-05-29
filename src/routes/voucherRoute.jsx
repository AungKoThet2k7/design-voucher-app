import { lazy } from "react";
const VoucherListPage = lazy(() => import("../features/voucher/pages/VoucherListPage"));
const VoucherDetailPage = lazy(() => import("../features/voucher/pages/VoucherDetailPage"));

const voucherRoute = [
  {
    path: "voucher",
    element: <VoucherListPage />,
  },
  {
    path: "voucher-detail/:id",
    element: <VoucherDetailPage/>,
  },
];

export default voucherRoute;