import { SignIn } from "../../components/common/sign-in";
import { useSelector, useDispatch } from "react-redux";
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar';
import { CommonStateHandler } from "../../utils/commonhandler";
import { HandleGetHumanResources, HandlePostHumanResources } from "../../redux/Thunks/HRThunk";

export const HRLogin = () => {
  const HRState = useSelector((state: any) => state.HRReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loadingbar = useRef(null);
  const [signinform, setsigninform] = useState({
    email: "",
    password: ""
  });

  const handlesigninform = (event: React.ChangeEvent<HTMLInputElement>) => {
    CommonStateHandler(signinform, setsigninform, event);
  };

  const handlesigninsubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (loadingbar.current) {
      (loadingbar.current as any).continuousStart();
    }
    dispatch(HandlePostHumanResources({ apiroute: "LOGIN", data: signinform }) as any);
  };

  if (HRState.error.status && loadingbar.current) {
    (loadingbar.current as any).complete();
  }

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        await dispatch(HandleGetHumanResources({ apiroute: "CHECKLOGIN" }) as any);
      } catch (error) {
      }
    };
    
    checkLoginStatus();
  }, [dispatch]);

  useEffect(() => {
    if (HRState.isAuthenticated) {
      if (loadingbar.current) {
        (loadingbar.current as any).complete();
      }
      navigate("/HR/dashboard/dashboard-data");
    }
  }, [HRState.isAuthenticated, navigate]);

  return (
    <div>
      <div className="employee-login-content flex justify-center items-center h-[100vh]">
        <LoadingBar ref={loadingbar} />
        <SignIn image={"../../src/assets/Employee-Welcome.jpg"} handlesigninform={handlesigninform} handlesigninsubmit={handlesigninsubmit} targetedstate={HRState} statevalue={signinform} redirectpath={"/auth/HR/forgot-password"} />
      </div>
    </div>
  );
};