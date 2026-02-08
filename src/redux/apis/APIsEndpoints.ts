export const APIsEndPoints: { [key: string]: any } = {
    LOGIN: "/api/auth/employee/login",
    CHECKELOGIN: "/api/auth/employee/check-login",
    FORGOT_PASSWORD: "/api/auth/employee/forgot-password",
    RESET_PASSWORD: (token: string) => `/api/auth/employee/reset-password/${token}`,
    LOGOUT: "/api/auth/employee/logout",
    GET: "/api/v1/employee/by-employee",
    UPDATE_PROFILE: "/api/v1/employee/update-employee"
}

export const HREndPoints: { [key: string]: any } = {
    SIGNUP: "/api/auth/HR/signup",
    CHECKLOGIN: "/api/auth/HR/check-login",
    LOGIN: "/api/auth/HR/login",
    VERIFY_EMAIL: "/api/auth/HR/verify-email",
    CHECK_VERIFY_EMAIL: "/api/auth/HR/check-verify-email",
    RESEND_VERIFY_EMAIL: "/api/auth/HR/resend-verify-email",
    FORGOT_PASSWORD: "/api/auth/HR/forgot-password",
    RESET_PASSWORD: (token: string) => `/api/auth/HR/reset-password/${token}` 
}

export const DashboardEndPoints: { [key: string]: any } = {
    GETDATA: "/api/v1/dashboard/HR-dashboard"
}

export const HREmployeesPageEndPoints: { [key: string]: any } = {
    GETALL: "/api/v1/employee/all",
    ADDEMPLOYEE: "/api/auth/employee/signup",
    GETONE: (EMID: string) => `/api/v1/employee/by-HR/${EMID}`,
    DELETE: (EMID: string) => `/api/v1/employee/delete-employee/${EMID}`
}

export const HRDepartmentPageEndPoints: { [key: string]: any } = {
    GETALL: "/api/v1/department/all",
    CREATE: "/api/v1/department/create-department",
    UPDATE: "/api/v1/department/update-department",
    DELETE: "/api/v1/department/delete-department"
}

export const EmployeesIDsEndPoints: { [key: string]: any } = {
    GETALL: "/api/v1/employee/all-employees-ids",
}

export const LeavesEndPoints: { [key: string]: any } = {
    GETALL: "/api/v1/leave/all",
    CREATE: "/api/v1/leave/create-leave",
    UPDATE: "/api/v1/leave/HR-update-leave",
    DELETE: (id: string) => `/api/v1/leave/delete-leave/${id}`
}

export const API_ENDPOINTS = {
};
