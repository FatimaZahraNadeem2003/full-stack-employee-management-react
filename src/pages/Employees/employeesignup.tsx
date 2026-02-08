import { useState, useEffect, useRef } from "react"
import { SignUP } from "../../components/common/sign-up"
import { useDispatch, useSelector } from "react-redux"
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom'
import { CommonStateHandler } from "../../utils/commonhandler.js"
import { HandlePostEmployees } from "../../redux/Thunks/EmployeeThunk.js"

export const EmployeeSignup = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loadingbar = useRef(null)
    const EmployeeState = useSelector((state: any) => state.employeereducer)
    const [signupform, set_signuform] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: "",
        password: "",
        textpassword: ""
    })

    const handlesignupform = (event: React.ChangeEvent<HTMLInputElement>) => {
        CommonStateHandler(signupform, set_signuform, event)
    }

    const handlesignupsubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loadingbar.current) {
            (loadingbar.current as any).continuousStart();
        }
        dispatch(HandlePostEmployees({ apiroute: "SIGNUP", data: signupform }) as any)
    }

    const RedirectToDashbaord = () => {
        if (loadingbar.current) {
            (loadingbar.current as any).complete()
        }
        navigate("/employee/dashboard")
    }

    if (EmployeeState.error.status && loadingbar.current) {
        (loadingbar.current as any).complete()
    }

    useEffect(() => {
        if (EmployeeState.isAuthenticated) {
            RedirectToDashbaord()
        }
    }, [EmployeeState.isAuthenticated])

    return (
        <div className="employee-signup-container">
            <LoadingBar ref={loadingbar} />
            <div className="employee-signup-content flex justify-center items-center h-[100vh]">
                <SignUP image={"../../src/assets/Employee-Welcome.jpg"} handlesignupform={handlesignupform} handlesignupsubmit={handlesignupsubmit} targetedstate={EmployeeState} statevalue={signupform} redirectpath={"/auth/employee/forgot-password"} />
            </div>
        </div>
    )
}