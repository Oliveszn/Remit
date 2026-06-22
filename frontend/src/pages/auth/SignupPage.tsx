import { Helmet } from "react-helmet-async";
import { SignupForm } from "@/components/auth/SignupForm";

export default function SignupPage() {
  return (
    <>
      <Helmet>
        <title>Create account | Remit</title>
      </Helmet>
      <SignupForm />
    </>
  );
}
