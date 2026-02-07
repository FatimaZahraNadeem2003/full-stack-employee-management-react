import { Navigate } from "react-router-dom"
import { useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { HandleGetEmployees } from "../redux/Thunks/EmployeeThunk"

export const CheckLogin = ({ children }: { children: React.ReactNode }) => {
    const dispatch = useDispatch()
    const { isAuthenticated } = useSelector((state: any) => state.employeereducer)

    if (!isAuthenticated) {
        dispatch(HandleGetEmployees({ apiroute: "CHECKELOGIN" }) as any)
    }
    return (
        isAuthenticated ? <Navigate to={"/employee-dashboard"} /> : children
    )
}