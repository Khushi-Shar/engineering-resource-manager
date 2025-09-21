import { LayoutDashboard, Settings } from "lucide-react"
import EngineerDashboard from "../views/EngineerDashboard/EngineerDashboard";
import ManagerDashboard from "../views/ManagerDashboard/ManagerDashboard";
import RouteName from "@/routes/Route.name"

export const dashboardRoutes = [
  {
    path: RouteName.ENGINEERING_DASHBOARD,
    sidebarName: "Engineering Dashboard",
    icon: LayoutDashboard,
    component: EngineerDashboard,
    is_sidebar: true,
    // module: "ENGINEERING",
    // permissions: ["read"],
  },
  {
    path: RouteName.MANGER_DASHBOARD,
    sidebarName: "Management Dashboard",
    icon: Settings,
    component: ManagerDashboard,
    is_sidebar: true,
    // module: "MANAGEMENT",
    // permissions: ["read"],
  },
]
