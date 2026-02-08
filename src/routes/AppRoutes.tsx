import { createBrowserRouter } from "react-router-dom";
import { EmployeeRoutes } from "./employeeroutes"
import { HRRoutes } from "./HRroutes"
import { AuthRoutes } from "./AuthRoutes"

export const router = createBrowserRouter([
    ...AuthRoutes,
    ...EmployeeRoutes,
    ...HRRoutes 
])