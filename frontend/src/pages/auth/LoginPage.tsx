import { Helmet } from "react-helmet-async";
import { LoginForm } from "@/components/auth/LoginForm";

export default function LoginPage() {
  return (
    <>
      <Helmet>
        <title>Log in | Remit</title>
      </Helmet>
      <LoginForm />
    </>
  );
}
