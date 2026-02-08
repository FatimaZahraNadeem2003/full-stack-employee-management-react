import { EmployeeLogin } from "../pages/Employees/emplyoeelogin"
import { EmployeeDashboard } from "../pages/Employees/employeedashboard"
import { ProtectedRoutes } from "./protectedroutes"
import { ForgotPassword } from "../pages/Employees/forgotpassword"
import { ResetEmailConfirmPage } from "../pages/Employees/resetemailconfirm.tsx"
import { ResetPasswordPage } from "../pages/Employees/resetpassword.tsx"
import { EntryPage } from "../pages/Employees/EntryPage"
import { EmployeeProfilePage } from "../pages/Employees/DashboardChilds/profilepage"
import { EmployeeLeavesPage } from "../pages/Employees/DashboardChilds/leavespage"
import { EmployeeSalaryPage } from "../pages/Employees/DashboardChilds/salarypage"
import { EmployeeNoticesPage } from "../pages/Employees/DashboardChilds/noticespage"
import { EmployeeAttendancePage } from "../pages/Employees/DashboardChilds/attendancepage"
import { EmployeeDepartmentPage } from "../pages/Employees/DashboardChilds/departmentpage"
// import { VerifyEmailPage } from "../pages/common/verifyemailpage"
import { EmployeeSignup } from "../pages/Employees/employeesignup"

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
        element: <ResetEmailConfirmPage />
    },
    {
        path: "/auth/employee/resetpassword/:token",
        element: <ResetPasswordPage /> 
    },
]