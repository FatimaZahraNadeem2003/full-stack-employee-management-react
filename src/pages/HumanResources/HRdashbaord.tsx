import { HRDashboardSidebar } from "@/components/ui/HRsidebar"
import { Outlet } from "react-router-dom"

export const HRDashboard = () => {
    return (
        <div className="flex h-screen">
            <HRDashboardSidebar />
            <main className="flex-1 overflow-auto">
                <Outlet />
            </main>
        </div>
    )
}