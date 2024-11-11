import { FC } from "react";
import Header from "./components/header";
import LoginForm from "./components/loginForm";

const LoginPage: FC = () => {
  return (
    <div>
      <Header />
      <LoginForm />
    </div>
  );
};

export default LoginPage;