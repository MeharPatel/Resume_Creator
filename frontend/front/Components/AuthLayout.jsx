const AuthLayout = ({ title, children }) => {
  return (
    <div className="container flex items-center justify-center min-h-screen py-16">
      <div className="w-full max-w-md">
        <div className="text-center">
          <div className="gradient-text text-2xl">{title}</div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
