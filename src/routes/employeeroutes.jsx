import { EmployeeLogin } from "../pages/Employees/emplyoeelogin.jsx"
import { EmployeeDashboard } from "../pages/Employees/employeedashboard.jsx"
import { ProtectedRoutes } from "./protectedroutes.jsx"
import { ForgotPassword } from "../pages/Employees/forgotpassword.jsx"
import { ResetEmailConfirm } from "../pages/Employees/resetemailconfirm.jsx"
import { ResetPassword } from "../pages/Employees/resetpassword.jsx"
import { EntryPage } from "../pages/Employees/EntryPage.jsx"
import { EmployeeProfilePage } from "../pages/Employees/DashboardChilds/profilepage.jsx"
import { EmployeeLeavesPage } from "../pages/Employees/DashboardChilds/leavespage.jsx"
import { EmployeeSalaryPage } from "../pages/Employees/DashboardChilds/salarypage.jsx"
import { EmployeeNoticesPage } from "../pages/Employees/DashboardChilds/noticespage.jsx"
import { EmployeeAttendancePage } from "../pages/Employees/DashboardChilds/attendancepage.jsx"
import { EmployeeDepartmentPage } from "../pages/Employees/DashboardChilds/departmentpage.jsx"
// import { VerifyEmailPage } from "../pages/common/verifyemailpage.jsx"
import { EmployeeSignup } from "../pages/Employees/employeesignup.jsx"

export const EmployeeRoutes = [
    {
        path: "/",
        element: <EntryPage />
    },
    {
        path: "/auth/employee/signup",
        element: <EmployeeSignup />
    },
    {
        path: "/auth/employee/login",
        element: <EmployeeLogin />
    },
    // {
    //     path: "/auth/employee/verify-email", 
    //     element: <VerifyEmailPage />
    // },
    {
        path: "/employee/dashboard",
        element: <ProtectedRoutes> <EmployeeDashboard /> </ProtectedRoutes>,
        children: [
            {
                path: "/employee/dashboard/profile",
                element: <EmployeeProfilePage />
            },
            {
                path: "/employee/dashboard/leaves",
                element: <EmployeeLeavesPage />
            },
            {
                path: "/employee/dashboard/salary",
                element: <EmployeeSalaryPage />
            },
            {
                path: "/employee/dashboard/notices",
                element: <EmployeeNoticesPage />
            },
            {
                path: "/employee/dashboard/attendance",
                element: <EmployeeAttendancePage />
            },
            {
                path: "/employee/dashboard/departments",
                element: <EmployeeDepartmentPage />
            }
        ]
    },
    {
        path: "/auth/employee/forgot-password",
        element: <ForgotPassword />
    },
    {
        path: "/auth/employee/reset-email-confirmation",
        element: <ResetEmailConfirm />
    },
    {
        path: "/auth/employee/resetpassword/:token",
        element: <ResetPassword /> 
    },
]