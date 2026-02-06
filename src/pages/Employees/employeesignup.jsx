import { SignUP } from "../../components/common/sign-up"
import { useState, useEffect, useRef } from "react"
import { useDispatch, useSelector } from "react-redux"
import LoadingBar from 'react-top-loading-bar'
import { useNavigate } from 'react-router-dom'
import { CommonStateHandler } from "../../utils/commonhandler.js"
import { HandlePostEmployees, HandleGetEmployees } from "../../redux/Thunks/EmployeeThunk.js"

export const EmployeeSignup = () => {
    const employeeState = useSelector((state) => state.employeereducer)
    const [errorpopup, seterrorpopup] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const loadingbar = useRef(null)
    const [signupform, set_signuform] = useState({
        firstname: "",
        lastname: "",
        email: "",
        contactnumber: "",
        password: "",
        textpassword: ""
    })

    const handlesignupform = (event) => {
        CommonStateHandler(signupform, set_signuform, event)
    }

    const handlesubmitform = (event) => {
        if (signupform.textpassword === signupform.password) {
            event.preventDefault();
            seterrorpopup(false)
            loadingbar.current.continuousStart();
            dispatch(HandlePostEmployees({ apiroute: "SIGNUP", data: signupform }))
        }
        else {
            event.preventDefault();
            seterrorpopup(true)
        }
    }


    if (employeeState.error.status) {
        loadingbar.current.complete()
    }

    useEffect(() => {
        if (employeeState.isAuthenticated) {
            loadingbar.current.complete()
            navigate("/employee/dashboard")
        }
    }, [employeeState.isAuthenticated])

    return (
        <div className="employeesignup-page-container h-screen flex justify-center min-[900px]:justify-center min-[900px]:items-center">
            <LoadingBar ref={loadingbar} />
            <SignUP stateformdata={signupform} handlesignupform={handlesignupform} handlesubmitform={handlesubmitform} errorpopup={errorpopup} />
        </div>
    )
}