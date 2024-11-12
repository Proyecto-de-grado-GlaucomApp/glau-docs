import { FC } from "react";
import Header from "./components/header";
import SignUpForm from "./components/signupForm";

const SignUpPage: FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <Header />
      <SignUpForm />
    </div>
  );
};

export default SignUpPage;