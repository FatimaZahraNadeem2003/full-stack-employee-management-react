import { ResetPassword } from "../../components/common/reset-password.tsx";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { HandlePostEmployees } from "../../redux/Thunks/EmployeeThunk.ts";
import LoadingBar from 'react-top-loading-bar';
import { useNavigate, useParams } from 'react-router-dom';

export const ResetPasswordPage = () => {
  const employeestate = useSelector((state: any) => state.employeereducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingbar = useRef(null);
  const { token } = useParams<{ token: string }>();
  // const [passworderror, setpassworderror] = useState(false);
  const [passwordform, setpasswordform] = useState({
    password: "",
    repeatpassword: ""
  });

  const handlepasswordsubmit = (e: React.FormEvent) => {
    if (passwordform.password === passwordform.repeatpassword) {
      e.preventDefault();
      if (loadingbar.current) {
        (loadingbar.current as any).continuousStart();
      }

      dispatch(HandlePostEmployees({ apiroute: token, data: { password: passwordform.password }, type: "resetpassword" }) as any);
    }
    else {
      e.preventDefault();
 
    }
  };

  const handlepasswordform = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpasswordform({ ...passwordform, [e.target.name]: e.target.value });
  };

  if (employeestate.error.status && loadingbar.current) {
    (loadingbar.current as any).complete();
  }

  useEffect(() => {
    if (employeestate.isResetPasswords) {
      if (loadingbar.current) {
        (loadingbar.current as any).complete();
      }
      navigate("/auth/employee/login");
    }
  }, [employeestate.isResetPasswords]);

  return (
    <div className="reset-password-container">
      <LoadingBar ref={loadingbar} />
      <div className="reset-password-content flex justify-center items-center h-[100vh]">
        <ResetPassword 
          image={"../../src/assets/verify-email.png"} 
          handleresetpasswordform={handlepasswordform} 
          handleresetpasswordsubmit={handlepasswordsubmit} 
          targetedstate={employeestate} 
          statevalue={passwordform}
        />
      </div>
    </div>
  );
};