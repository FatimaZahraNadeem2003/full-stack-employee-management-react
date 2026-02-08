import {
    Sidebar,
    SidebarContent,
    SidebarFooter,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"

import { NavLink, useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"
import { HandlePostEmployees } from "../../redux/Thunks/EmployeeThunk"
import type { AppDispatch } from "../../redux/app/store"

function LogoutButton() {
    const dispatch: AppDispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(HandlePostEmployees({ apiroute: "LOGOUT", data: {} }));
        navigate("/auth/employee/login");
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

export function EmployeeDashboardSidebar() {
    return (
        <Sidebar>
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupContent>

                        <SidebarMenu className="gap-3 p-2">


                            <NavLink to={"/employee/dashboard/profile"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>

                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/dashboard.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">Profile</button>
                                </SidebarMenuItem>

                            </NavLink>


                            <NavLink to={"/employee/dashboard/leaves"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>

                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">
                                    <img src="/../../src/assets/HR-Dashboard/leave.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">My Leaves</button>
                                </SidebarMenuItem>

                            </NavLink>


                            <NavLink to={"/employee/dashboard/salary"} className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>

                                <SidebarMenuItem className="flex gap-4 hover:bg-blue-200 rounded-lg">

                                    <img src="/../../src/assets/HR-Dashboard/salary.png" alt="" className="w-7 ms-2 my-1" />
                                    <button className="text-[16px]">My Salary</button>

                                </SidebarMenuItem>

                            </NavLink>
                            
                            <NavLink to="/employee/dashboard/notices" className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="my-1">
                                    <SidebarMenuButton className="gap-4">
                                        <img src="/../../src/assets/HR-Dashboard/notice.png" alt="" className="w-7" />
                                        <button className="text-[16px]">Notices</button>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </NavLink>

                            <NavLink to="/employee/dashboard/attendance" className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="my-1">
                                    <SidebarMenuButton className="gap-4">
                                        <img src="/../../src/assets/HR-Dashboard/attendance.png" alt="" className="w-7" />
                                        <button className="text-[16px]">Attendance</button>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            </NavLink>

                            <NavLink to="/employee/dashboard/departments" className={({ isActive }) => { return isActive ? "bg-blue-200 rounded-lg" : "" }}>
                                <SidebarMenuItem className="my-1">
                                    <SidebarMenuButton className="gap-4">
                                        <img src="/../../src/assets/HR-Dashboard/department.png" alt="" className="w-7" />
                                        <button className="text-[16px]">My Department</button>
                                    </SidebarMenuButton>
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