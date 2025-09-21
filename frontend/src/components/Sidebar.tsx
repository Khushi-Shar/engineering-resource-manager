import { useState } from "react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/button"
import { useNavigate } from "react-router-dom"
import { dashboardRoutes } from "@/routes/dashboard"

const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false)
  const navigate = useNavigate()

  return (
    <div
      className={cn(
        "h-screen bg-gray-900 text-white flex flex-col transition-all duration-300",
        collapsed ? "w-16" : "w-64"
      )}
    >

      <div className="flex items-center justify-end p-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          className="text-gray-300 hover:text-white"
        >
          {collapsed ? "→" : "←"}
        </Button>
      </div>

     
      <nav className="flex-1 space-y-2 mt-4">
        {dashboardRoutes
          .filter((route) => route.is_sidebar) 
          .map((route) => (
            <Button
              key={route.path}
              variant="ghost"
              className={cn(
                "w-full flex items-center space-x-2 justify-start text-gray-300 hover:text-white hover:bg-gray-800",
                collapsed ? "justify-center" : ""
              )}
              onClick={() => navigate(route.path)}
            >
              <route.icon className="h-5 w-5" />
              {!collapsed && <span>{route.sidebarName}</span>}
            </Button>
          ))}
      </nav>
    </div>
  )
}

export default Sidebar
