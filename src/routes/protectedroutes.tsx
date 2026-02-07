import { Navigate } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"
import { useEffect } from "react"
import { HandleGetEmployees } from "../redux/Thunks/EmployeeThunk"

export const ProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
    const { isAuthenticated } = useSelector((state: any) => state.employeereducer)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(HandleGetEmployees({ apiroute: "CHECKELOGIN" }) as any)
    }, [isAuthenticated])
    
    return (
        isAuthenticated ? children : <Navigate to="/" />
    )
}