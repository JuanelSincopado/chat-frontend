import Logo from "../Components/auth/Logo";
import FormLogin from "../Components/auth/FormLogin";
import "../Components/auth/auth.css";

const Login = () => {
  return (
    <div className="auth__relativo">
      <Logo />

      <FormLogin />
    </div>
  );
};

export default Login;
