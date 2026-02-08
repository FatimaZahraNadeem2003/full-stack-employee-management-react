import { ResetEmailConfirmaction } from "../../components/common/reset-email-confirm.tsx";

export const ResetEmailConfirm = () => { 
  return (
    <>
      <ResetEmailConfirmaction redirectpath={"/auth/employee/login"} />
    </>
  );
};