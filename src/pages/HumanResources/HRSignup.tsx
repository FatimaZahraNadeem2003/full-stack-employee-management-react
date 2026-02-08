import { SignUP } from "../../components/common/sign-up";
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { HandlePostEmployees, HandleGetEmployees } from "../../redux/Thunks/EmployeeThunk.js"
import LoadingBar from 'react-top-loading-bar';
import { useNavigate } from 'react-router-dom';
import { CommonStateHandler } from "../../utils/commonhandler";
import { HandlePostHumanResources } from "../../redux/Thunks/HRThunk";

export const HRSignupPage = () => {
  const HRState = useSelector((state: any) => state.HRReducer);
  const [errorpopup, seterrorpopup] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingbar = useRef(null);
  const [signupform, set_signuform] = useState({
    firstname: "",
    lastname: "",
    email: "",
    contactnumber: "",
    password: "",
    textpassword: "",
    name : "", 
    description : "", 
    OrganizationURL : "", 
    OrganizationMail : ""
  });

  const handlesignupform = (event: React.ChangeEvent<HTMLInputElement>) => {
    CommonStateHandler(signupform, set_signuform, event);
  };

  const handlesubmitform = (event: React.FormEvent) => {
    if (signupform.textpassword === signupform.password) {
      event.preventDefault();
      seterrorpopup(false);
      if (loadingbar.current) {
        (loadingbar.current as any).continuousStart();
      }
      dispatch(HandlePostHumanResources({ apiroute: "SIGNUP", data: signupform }) as any);
    }
    else {
      event.preventDefault();
      seterrorpopup(true);
    }
  };

  if (HRState.error.status && loadingbar.current) {
    (loadingbar.current as any).complete();
  }

  useEffect(() => {
    if (HRState.isAuthenticated && HRState.isVerified) {
      if (loadingbar.current) {
        (loadingbar.current as any).complete();
      }
      navigate("/HR/dashboard/dashboard-data");
    }
  }, [HRState.isAuthenticated, HRState.isVerified]);

  // console.log(signupform)
  // console.log(HRState)

  return (
    <div className="HRsignup-page-container h-screen flex justify-center min-[900px]:justify-center min-[900px]:items-center">
      <LoadingBar ref={loadingbar} />
      <SignUP 
        image={"../../src/assets/verify-email.png"} 
        handlesignupform={handlesignupform} 
        handlesignupsubmit={handlesubmitform} 
        targetedstate={HRState} 
        statevalue={signupform} 
        redirectpath="/auth/HR/login" 
        errorpopup={errorpopup} 
      />
    </div>
  );
};