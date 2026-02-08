import { useState, useEffect, useRef } from "react";

import { useDispatch, useSelector } from "react-redux";
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from 'react-router-dom';
import { ForgotPassword } from "../../components/common/forgot-password";
import { HandlePostHumanResources } from "../../redux/Thunks/HRThunk";

export const HRForgotPasswordPage = () => {
  const HRstate = useSelector((state: any) => state.HRReducer);
  const loadingbar = useRef(null);
  const [forgotpassowrdform, setforgotpassowrdform] = useState({ email: "" }) ;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handlesforgotpasswordform = (e: React.ChangeEvent<HTMLInputElement>) => {
    setforgotpassowrdform({ ...forgotpassowrdform, [e.target.name]: e.target.value });
  };

  const handleforgotpasswordsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loadingbar.current) {
      (loadingbar.current as any).continuousStart();
    }
    dispatch(HandlePostHumanResources({ apiroute: "FORGOT_PASSWORD", data: forgotpassowrdform }) as any);
  };

  if (HRstate.error.status && loadingbar.current) {
    (loadingbar.current as any).complete();
  }

  useEffect(() => {
    if (HRstate.data) {
      if (loadingbar.current) {
        (loadingbar.current as any).complete();
      }
      navigate("/auth/HR/reset-email-confirmation");
    }
  }, [HRstate.data]);

  console.log(HRstate);

  return (
    <div className="employee-login-container">
      <LoadingBar ref={loadingbar} />
      <div className="employee-login-content flex justify-center items-center h-[100vh]">
        <ForgotPassword 
          image={"../../src/assets/verify-email.png"} 
          handleforgotpasswordform={handlesforgotpasswordform} 
          handleforgotpasswordsubmit={handleforgotpasswordsubmit} 
          targetedstate={HRstate} 
          statevalue={forgotpassowrdform} 
        />
      </div>
    </div>
  );
};