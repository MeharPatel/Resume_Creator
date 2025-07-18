
import AuthLayout from "../Components/AuthLayout";
import LoginForm from "../Components/LoginForm";

const LoginPage = () => {
  return (
    <div>
      <AuthLayout title="Sign In to VibeResume" className='home-mid-sections'>
        <LoginForm className = 'relative pt-64 pb-20 md:py-40 overflow-hidden' />
      </AuthLayout>
    </div>
  );
};

export default LoginPage;
