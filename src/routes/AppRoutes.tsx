import { createBrowserRouter } from "react-router-dom";
import { EmployeeRoutes } from "./employeeroutes"
import { HRRoutes } from "./HRroutes"

export const router = createBrowserRouter([
    ...EmployeeRoutes,
    ...HRRoutes 
])