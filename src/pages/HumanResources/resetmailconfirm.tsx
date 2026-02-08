import { ResetEmailConfirm } from "../../components/common/reset-email-confirm";

export const ResetMailConfirmPage = () => {
  return (
    <ResetEmailConfirm 
      image={"../../src/assets/verify-email.png"} 
      message="Check your email for the verification link" 
      onLoginRedirect={() => {}} 
    />
  ); 
};