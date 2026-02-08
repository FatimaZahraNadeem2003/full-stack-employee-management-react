import { ResetEmailConfirm } from "../../components/common/reset-email-confirm.tsx";

export const ResetEmailConfirmPage = () => { 
  return (
    <>
      <ResetEmailConfirm 
        image={"../../src/assets/verify-email.png"} 
        message="We have sent a password reset link to your email address." 
        onLoginRedirect={() => {}} 
      />
    </>
  );
};