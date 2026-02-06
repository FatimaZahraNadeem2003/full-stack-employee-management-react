import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { EmployeeDashboardSidebar } from "../../components/ui/Employeesidebar.jsx"
import { Outlet } from "react-router-dom"
import { useNavigate, useLocation } from "react-router-dom"
import { useEffect } from "react"

export const EmployeeDashboard = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const pathArray = location.pathname.split("/")

    useEffect(() => {
        if (location.pathname === '/employee/dashboard') {
            navigate('/employee/dashboard/profile');
        }
    }, [location.pathname, navigate]);

    return (
        <div className="employee-dashboard-container flex">

            <div className="employeeDashboard-sidebar">
                <SidebarProvider>
                    <EmployeeDashboardSidebar />
                    <div className="sidebar-container min-[250px]:absolute md:relative">
                        <SidebarTrigger />
                    </div>
                </SidebarProvider>
            </div>
            <div className="employeedashboard-container h-screen w-full min-[250px]:mx-1 md:mx-2 flex flex-col">
                <Outlet />
            </div>
        </div>
    )
}