import { HandleGetHumanResources } from "../redux/Thunks/HRThunk"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"
import { Navigate, useNavigate } from "react-router-dom"
import { Loading } from "../components/common/loading.tsx"

export const HRProtectedRoutes = ({ children }: { children: React.ReactNode }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const HRState = useSelector((state: any) => state.HRReducer)

    useEffect(() => {
        if (!HRState.isAuthenticated && !HRState.isAuthourized && !HRState.error.content) {
            dispatch(HandleGetHumanResources({ apiroute: "CHECKLOGIN" }) as any)
        }

        if (!HRState.isAuthenticated && !HRState.isAuthourized && HRState.error.content) {
            navigate("/auth/HR/signup")
        }
    }, [HRState.isAuthenticated, HRState.isAuthourized, HRState.error.content])

    if (HRState.isLoading) {
        return (
            <Loading />
        )
    }

    return (
        (HRState.isAuthenticated && HRState.isAuthourized) ? children : null
    )
}