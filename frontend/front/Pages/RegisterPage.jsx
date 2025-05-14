import AuthLayout from "../Components/AuthLayout";
import RegisterForm from "../Components/RegisterForm";


const RegisterPage = () => {
  return (
    <AuthLayout title="Create Your Account">
      <RegisterForm className = 'relative pt-32 pb-20 md:py-40 overflow-hidden' />
    </AuthLayout>
  );
};

export default RegisterPage;
