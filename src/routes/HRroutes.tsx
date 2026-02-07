import { HRSignupPage } from "../pages/HumanResources/HRSignup"
import { HRLogin } from "../pages/HumanResources/HRlogin"
import { HRDashbaord } from "../pages/HumanResources/HRdashbaord"
import { VerifyEmailPage } from "../pages/HumanResources/verifyemailpage"
// import { ResetEmailConfirm } from "../pages/Employees/resetemailconfirm"
// import { ResetEmailVerification } from "../pages/HumanResources/resendemailverificaiton"
import { HRForgotPasswordPage } from "../pages/HumanResources/forgotpassword"
import { ResetMailConfirmPage } from "../pages/HumanResources/resetmailconfirm"
import { ResetHRPasswordPage } from "../pages/HumanResources/resetpassword"
import { ResetHRVerifyEmailPage } from "../pages/HumanResources/resetemail"
import { HRDashboardPage } from "../pages/HumanResources/Dashboard Childs/dashboardpage"
import { HRProtectedRoutes } from "./HRprotectedroutes"
import { HREmployeesPage } from "../pages/HumanResources/Dashboard Childs/employeespage"
import { HRDepartmentPage } from "../pages/HumanResources/Dashboard Childs/departmentpage"
import { HRLeavesPage } from "../pages/HumanResources/Dashboard Childs/leavespage"
import { HRSalariesPage } from "../pages/HumanResources/Dashboard Childs/salariespage"
import { HRNoticesPage } from "../pages/HumanResources/Dashboard Childs/noticespage"
import { HRAttendancesPage } from "../pages/HumanResources/Dashboard Childs/attendancespage"
import { HRRecruitmentPage } from "../pages/HumanResources/Dashboard Childs/recruitmentpage"
import { HRInterviewInsightsPage } from "../pages/HumanResources/Dashboard Childs/interviewinsightspage"
import { HRRequestsPage } from "../pages/HumanResources/Dashboard Childs/requestspage"
import { HRProfilesPage } from "../pages/HumanResources/Dashboard Childs/hrprofilespage"

export const HRRoutes = [
    {
        path: "/auth/HR/signup",
        element: <HRSignupPage />
    },
    {
        path: "/auth/HR/login",
        element: <HRLogin />
    },
    {
        path: "/HR/dashboard",
        element: <HRDashbaord />,
        children: [
            {
                path: "/HR/dashboard/dashboard-data",
                element: <HRDashboardPage />
            },
            {
                path: "/HR/dashboard/employees",
                element: <HREmployeesPage />
            },
            {
                path: "/HR/dashboard/departments",
                element: <HRDepartmentPage />
            },
            {
                path: "/HR/dashboard/leaves",
                element: <HRLeavesPage />
            },
            {
                path: "/HR/dashboard/salaries",
                element: <HRSalariesPage />
            },
            {
                path: "/HR/dashboard/notices",
                element: <HRNoticesPage />
            },
            {
                path: "/HR/dashboard/attendances",
                element: <HRAttendancesPage />
            },
            {
                path: "/HR/dashboard/recruitment",
                element: <HRRecruitmentPage />
            },
            {
                path: "/HR/dashboard/interview-insights",
                element: <HRInterviewInsightsPage />
            },
            {
                path: "/HR/dashboard/requests",
                element: <HRRequestsPage />
            },
            {
                path: "/HR/dashboard/hr-profiles",
                element: <HRProfilesPage />
            }
        ]
    },
    {
        path: "/auth/HR/verify-email",
        element: <VerifyEmailPage />
    },
    {
        path: "/auth/HR/reset-email-validation",
        element: <ResetHRVerifyEmailPage />
    },
    {
        path: "/auth/HR/forgot-password",
        element: <HRForgotPasswordPage />
    },
    {
        path: "/auth/HR/reset-email-confirmation",
        element: <ResetMailConfirmPage />
    },
    {
        path: "/auth/HR/resetpassword/:token",
        element: <ResetHRPasswordPage />
    },
]