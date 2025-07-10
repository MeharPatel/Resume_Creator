
import AuthLayout from "../Components/AuthLayout";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  return (
    <AuthLayout title="Sign In to VibeResume">
      <LoginForm className = 'relative pt-64 pb-20 md:py-40 overflow-hidden' />
    </AuthLayout>
  );
};

export default LoginPage;
