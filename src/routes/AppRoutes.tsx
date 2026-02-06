import { createBrowserRouter } from "react-router-dom";
import { EmployeeRoutes } from "./employeeroutes.jsx"
import { HRRoutes } from "./HRroutes.jsx";

export const router = createBrowserRouter([
    ...EmployeeRoutes,
    ...HRRoutes 
])
