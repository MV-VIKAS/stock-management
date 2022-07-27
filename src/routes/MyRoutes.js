import { useRoutes } from "react-router-dom";
import LandingPage from "../components/landingPage/LandingPage";
import DashBoard from "../components/owner_module/dashBoard/DashBoard";
import Sidebar from "../components/owner_module/dashBoard/sidebar/Sidebar";
import StaffPage from "../components/owner_module/page/staff_page/StaffPage";
import StockPage from "../components/owner_module/page/stock_page/StockPage";
import CreateStock from "../components/owner_module/crud_admin/crud_stock/CreateStock";
import PageNotFound from "../components/PageNotFound";
import Upadatestock from "../components/owner_module/crud_admin/crud_stock/UpdateStock";
import CreateStaff from "../components/owner_module/crud_admin/crud_staff/UpdateStaff";
import UpdateStaff from "../components/owner_module/crud_admin/crud_staff/UpdateStaff";
const Myroutes = () => {
  const route = useRoutes([
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/ownerDashboard",
      element: <DashBoard />,
      children: [
        {
          path: "/ownerDashboard/stocks",
          element: <StockPage />,
        },
        {
          path: "/ownerDashboard/staff",
          element: <StaffPage />,
        },
      ],
    },
    {
      path: "/ownerSidebar",
      element: <Sidebar />,
    },
    {
      path: "/createStock",
      element: <CreateStock />,
    },
    {
      path: "/UpdateStock",
      element: <Upadatestock />,
    },
    {
      path: "/createStaff",
      element: <CreateStaff />,
    },
    {
      path:'/updateStaff',
      element: <UpdateStaff/>
    },
    {
      path: "*",
      element: <PageNotFound />,
    },
  ]);
  return route;
};

export default Myroutes;
