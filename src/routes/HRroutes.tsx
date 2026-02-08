import { HRSignupPage } from "../pages/HumanResources/HRSignup.tsx"
import { HRLogin } from "../pages/HumanResources/HRlogin.tsx"
import { HRDashbaord } from "../pages/HumanResources/HRdashbaord.tsx"
import { VerifyEmailPage } from "../pages/HumanResources/verifyemailpage.tsx"
// import { ResetEmailConfirm } from "../pages/Employees/resetemailconfirm"
// import { ResetEmailVerification } from "../pages/HumanResources/resendemailverificaiton"
import { HRForgotPasswordPage } from "../pages/HumanResources/forgotpassword.tsx"
import { ResetMailConfirmPage } from "../pages/HumanResources/resetmailconfirm.tsx"
import { ResetHRPasswordPage } from "../pages/HumanResources/resetpassword.tsx"
import { ResetHRVerifyEmailPage } from "../pages/HumanResources/resetemail.tsx"
import { HRDashboardPage } from "../pages/HumanResources/Dashboard Childs/dashboardpage.tsx"
import { HREmployeesPage } from "../pages/HumanResources/Dashboard Childs/employeespage.tsx"
import { HRDepartmentPage } from "../pages/HumanResources/Dashboard Childs/departmentpage.tsx"
import { HRLeavesPage } from "../pages/HumanResources/Dashboard Childs/leavespage.tsx"
import { HRSalariesPage } from "../pages/HumanResources/Dashboard Childs/salariespage.tsx"
import { HRNoticesPage } from "../pages/HumanResources/Dashboard Childs/noticespage.tsx"
import { HRAttendancesPage } from "../pages/HumanResources/Dashboard Childs/attendancespage.tsx"
import { HRRecruitmentPage } from "../pages/HumanResources/Dashboard Childs/recruitmentpage.tsx"
import { HRInterviewInsightsPage } from "../pages/HumanResources/Dashboard Childs/interviewinsightspage.tsx"
import { HRRequestsPage } from "../pages/HumanResources/Dashboard Childs/requestspage.tsx"
import { HRProfilesPage } from "../pages/HumanResources/Dashboard Childs/hrprofilespage.tsx"

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