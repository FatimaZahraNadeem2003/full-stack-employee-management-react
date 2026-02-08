import { useState, useEffect, useRef } from "react";
import { ForgotPassword as ForgotPasswordComponent } from "../../components/common/forgot-password";
import { useDispatch, useSelector } from "react-redux";
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from 'react-router-dom';
import { CommonStateHandler } from "../../utils/commonhandler.js";
import { HandlePostEmployees } from "../../redux/Thunks/EmployeeThunk.js";

export const ForgotPassword = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const loadingbar = useRef(null);
    const EmployeeState = useSelector((state: any) => state.employeereducer);
    const [forgotpasswordform, set_forgotpasswordform] = useState({
        email: "",
    });

    const handleforgotpasswordform = (event: React.ChangeEvent<HTMLInputElement>) => {
        CommonStateHandler(forgotpasswordform, set_forgotpasswordform, event);
    };

    const handleforgotpasswordsubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (loadingbar.current) {
            (loadingbar.current as any).continuousStart();
        }
        dispatch(HandlePostEmployees({ apiroute: "FORGOT_PASSWORD", data: forgotpasswordform }) as any);
    };

    const RedirectToLogin = () => {
        if (loadingbar.current) {
            (loadingbar.current as any).complete();
        }
        navigate("/auth/employee/login");
    };

    if (EmployeeState.error.status && loadingbar.current) {
        (loadingbar.current as any).complete();
    }

    useEffect(() => {
        if (EmployeeState.isResetPasswords) {
            RedirectToLogin();
        }
    }, [EmployeeState.isResetPasswords]);

    return (
        <div className="employee-forgot-password-container">
            <LoadingBar ref={loadingbar} />
            <div className="employee-forgot-password-content flex justify-center items-center h-[100vh]">
                <ForgotPasswordComponent 
                    image={"../../src/assets/Employee-Welcome.jpg"} 
                    handleforgotpasswordform={handleforgotpasswordform} 
                    handleforgotpasswordsubmit={handleforgotpasswordsubmit} 
                    targetedstate={EmployeeState} 
                    statevalue={forgotpasswordform} 
                />
            </div>
        </div>
    );
};