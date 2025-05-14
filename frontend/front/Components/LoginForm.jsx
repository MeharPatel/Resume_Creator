import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { toast } from "sonner";

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    toast.success("Login form submitted! This is just a UI demo.");
    console.log(data);
    reset(); // Reset form after submission
    // In a real app, you would handle authentication here
  };

  return (
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
      
      <div>
        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
          Password
        </label>
        <div className="relative mt-1">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            id="password"
            type={showPassword ? "text" : "password"}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 8,
                message: "Password must be at least 8 characters",
              },
            })}
          />
          <button
            type="button"
            className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-gray-400 hover:text-gray-600"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            <span className="sr-only">
              {showPassword ? "Hide password" : "Show password"}
            </span>
          </button>
        </div>
        {errors.password && (
          <span className="text-sm text-red-500">{errors.password.message}</span>
        )}
      </div>

      <div className="flex items-center justify-end">
        <Link
          to="/forgot-password"
          className="text-sm text-resume-primary hover:underline"
        >
          Forgot password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full primary-button text-white py-2 rounded-md hover:opacity-90 transition-opacity"
      >
        Sign In
      </button>

      <div className="text-center text-sm">
        Don't have an account?{" "}
        <Link to="/register" className="text-resume-primary hover:underline">
          Create an account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;