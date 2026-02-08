import { ResetVerifyEmailPage } from "../common/verify-email";

import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { CommonStateHandler } from "../../utils/commonhandler";
import { HandlePostHumanResources } from "../../redux/Thunks/HRThunk";

export const ResetHRVerifyEmailPage = () => {
  const HRState = useSelector((state: any) => state.HRReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingbar = useRef(null);
  const [emailvalue, setemailvalue] = useState({
    email: ""
  });

  const handleverifybutton = () => {
    if (loadingbar.current) {
      (loadingbar.current as any).continuousStart();
    }
    dispatch(HandlePostHumanResources({ apiroute: "RESEND_VERIFY_EMAIL", data: emailvalue }) as any);
  };

  const handleverifyemail = (event: React.ChangeEvent<HTMLInputElement>) => {
    CommonStateHandler(emailvalue, setemailvalue, event);
  };

  if (HRState.error.status && loadingbar.current) {
    (loadingbar.current as any).complete();
  }

  useEffect(() => {
    if (HRState.isVerified) {
      if (loadingbar.current) {
        (loadingbar.current as any).complete();
      }
      navigate("/auth/HR/dashboard");
    }

    if (HRState.isVerifiedEmailAvailable) {
      if (loadingbar.current) {
        (loadingbar.current as any).complete();
      }
      navigate("/auth/HR/verify-email");
    }
  }, [HRState.isVerified, HRState.isVerifiedEmailAvailable]);

  console.log(HRState);

  return (
    <>
      <LoadingBar ref={loadingbar} />
      <ResetVerifyEmailPage handleverifybutton={handleverifybutton} handleverifyemail={handleverifyemail} emailvalue={emailvalue.email} targetstate={HRState}/>
    </>
  );
};