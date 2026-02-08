import { EmployeeLogin } from "../pages/Employees/emplyoeelogin";
import { ForgotPassword } from "../pages/Employees/forgotpassword";
import { ResetEmailConfirm } from "../pages/Employees/resetemailconfirm";
import { ResetPassword } from "../pages/Employees/resetpassword";
import { EmployeeSignup } from "../pages/Employees/employeesignup";
import { HRSignupPage } from "../pages/HumanResources/HRSignup";
import { HRLogin } from "../pages/HumanResources/HRlogin";
import { VerifyEmailPage } from "../pages/HumanResources/verifyemailpage";
import { HRForgotPasswordPage } from "../pages/HumanResources/forgotpassword";
import { ResetMailConfirmPage } from "../pages/HumanResources/resetmailconfirm";
import { ResetHRPasswordPage } from "../pages/HumanResources/resetpassword";
import { ResetHRVerifyEmailPage } from "../pages/HumanResources/resetemail";

export const AuthRoutes = [
  // Employee Authentication Routes
  {
    path: "/auth/employee/signup",
    element: <EmployeeSignup />
  },
  {
    path: "/auth/employee/login",
    element: <EmployeeLogin />
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

  // HR Authentication Routes
  {
    path: "/auth/HR/signup",
    element: <HRSignupPage />
  },
  {
    path: "/auth/HR/login",
    element: <HRLogin />
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
];