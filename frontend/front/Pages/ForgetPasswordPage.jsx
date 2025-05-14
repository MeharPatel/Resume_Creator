import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Mail } from "lucide-react";
import { toast } from "sonner";

const ForgotPasswordPage = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (data) => {
    toast.success("Reset link sent! (This is just a UI demo)");
    console.log(data);
    reset(); // Reset form after submission
  };

  return (
    <div className="pt-28 min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="max-w-md w-full mx-4 p-8 bg-white rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Reset Your Password</h2>
        <div className="mb-6 text-center text-gray-500">
          Enter your email address and we'll send you a link to reset your password.
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <div className="relative mt-1">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <input
                id="email"
                placeholder="you@example.com"
                className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "Please enter a valid email address",
                  },
                })}
              />
            </div>
            {errors.email && (
              <span className="text-sm text-red-500">{errors.email.message}</span>
            )}
          </div>

          <button
            type="submit"
            className="w-full primary-button text-white py-2 rounded-md hover:opacity-90 transition-opacity"
          >
            Send Reset Link
          </button>

          <div className="text-center text-sm">
            <Link to="/login" className="text-resume-primary hover:underline">
              Back to sign in
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;