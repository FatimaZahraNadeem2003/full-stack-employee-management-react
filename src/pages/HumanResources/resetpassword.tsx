import { ResetPassword } from "../../components/common/reset-password";
import { useState, useEffect, useRef } from "react";
// import { SignIn } from "../../components/common/sign-in.jsx"
import { useDispatch, useSelector } from "react-redux";
// import { HandlePostEmployees, HandleGetEmployees } from "../../redux/Thunks/EmployeeThunk.js"
import { HandlePostHumanResources } from "../../redux/Thunks/HRThunk";
import LoadingBar from 'react-top-loading-bar';
import { useNavigate, useParams } from 'react-router-dom';

export const ResetHRPasswordPage = () => {
  const HRState = useSelector((state: any) => state.HRReducer);
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

      dispatch(HandlePostHumanResources({ apiroute: token, data: { password: passwordform.password }, type: "resetpassword" }) as any);
    }
    else {
      e.preventDefault();

    }
  };

  const handlepasswordform = (e: React.ChangeEvent<HTMLInputElement>) => {
    setpasswordform({ ...passwordform, [e.target.name]: e.target.value });
  };

  if (HRState.error.status && loadingbar.current) {
    (loadingbar.current as any).complete();
  }

  useEffect(() => {
    if (HRState.isResetPassword) {
      if (loadingbar.current) {
        (loadingbar.current as any).complete();
      }
      navigate("/auth/HR/login");
    }
  }, [HRState.isResetPassword]);

  console.log(HRState);

  return (
    <div className="reset-password-container">
      <LoadingBar ref={loadingbar} />
      <div className="reset-password-content flex justify-center items-center h-[100vh]">
        <ResetPassword 
          image={"../../src/assets/verify-email.png"} 
          handleresetpasswordform={handlepasswordform} 
          handleresetpasswordsubmit={handlepasswordsubmit} 
          targetedstate={HRState} 
          statevalue={passwordform} 
        />
      </div>
    </div>
  );
};