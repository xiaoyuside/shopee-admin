import Dashboard from "../pages/Dashboard";
import Login from "../pages/Login";
import NotFound from "../pages/NotFound";
import Oms from "../pages/Oms";
import Pms from "../pages/Pms";
import Wms from "../pages/Wms";

export const commonRoutes = [
  {
    pathname: "/login",
    comp: Login,
  },
  {
    pathname: "/404",
    comp: NotFound,
  },
];

export const privateRoutes = [
  {
    pathname: "/admin/dashboard",
    comp: Dashboard,
    title: "dashboard",
    icon: null,
  },
  {
    pathname: "/admin/pms",
    comp: Pms,
    title: "pms",
    icon: null,
  },
  {
    pathname: "/admin/oms",
    comp: Oms,
    title: "oms",
    icon: null,
  },
  {
    pathname: "/admin/wms",
    comp: Wms,
    title: "wms",
    icon: null,
  },
];
