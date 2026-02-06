import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarHeader,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { HandlePostHumanResources } from "../../redux/Thunks/HRThunk"

function LogoutButton() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(HandlePostHumanResources({ apiroute: "LOGOUT", data: {} }));
        navigate("/auth/HR/login");
    };

    return (
        <button 
            onClick={handleLogout}
            className="flex w-full items-center gap-2 rounded-lg p-2 text-left text-sm font-medium transition-colors hover:bg-accent aria-selected:bg-accent hover:text-accent-foreground aria-selected:text-accent-foreground"
        >
            <img src="../../src/assets/HR-Dashboard/logout.png" alt="" className="w-7" />
            <span>Logout</span>
        </button>
    );
}

export function HRDashboardSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>
                        <SidebarMenu className="gap-3 p-2">
                            <NavLink to={"/HR/dashboard"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/dashboard.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">Dashboard</button>
                                </SidebarMenuItem>
                            </NavLink>

                            <NavLink to={"/HR/dashboard/employees"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/employees.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">Employees</button>
                                </SidebarMenuItem>
                            </NavLink>

                            <NavLink to={"/HR/dashboard/departments"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/department.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">Departments</button>
                                </SidebarMenuItem>
                            </NavLink>

                            <NavLink to={"/HR/dashboard/leaves"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/leave.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">Leaves</button>
                                </SidebarMenuItem>
                            </NavLink>

                            <NavLink to={"/HR/dashboard/salary"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/salary.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">Salary</button>
                                </SidebarMenuItem>
                            </NavLink>

                            <NavLink to={"/HR/dashboard/notices"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/notice.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">Notices</button>
                                </SidebarMenuItem>
                            </NavLink>

                            <NavLink to={"/HR/dashboard/attendance"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/attendance.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">Attendance</button>
                                </SidebarMenuItem>
                            </NavLink>
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <SidebarFooter className="border-t">
                <SidebarMenu>
                    <SidebarMenuItem>
                        <LogoutButton />
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarFooter>
        </Sidebar>
    )
}