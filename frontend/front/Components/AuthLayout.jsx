const AuthLayout = ({ title, children }) => {
  return (
    <div className="container flex items-center justify-center min-h-screen py-16">
      <div className="w-full max-w-md dark:bg-gray-800 dark:border-gray-700">
        <div className="text-center">
          <div className="gradient-text text-2xl">{title}</div>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default AuthLayout;
