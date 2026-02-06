import { EmployeeDashboardSidebar } from "@/components/ui/Employeesidebar";
import { Outlet } from "react-router-dom";

export const EmployeeDashboard = () => {
    return (
        <div className="flex h-screen">
            <EmployeeDashboardSidebar />
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    );
};