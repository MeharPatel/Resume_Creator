import { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { Eye, EyeOff, Mail, Lock, User } from "lucide-react";
import { toast } from "sonner";
import { BACKEND_URL } from "../src/config";

const RegisterForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { register, handleSubmit, formState: { errors }, watch, reset } = useForm({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      acceptTerms: false,
    },
  });

  const password = watch("password"); // Watch password for confirmPassword validation

  const [message, setMessage] = useState('');

  const onSubmit = async (data) => {
    await fetch(`${BACKEND_URL}/register_user`, {
          method : 'POST',
          headers : { 'Content-Type' : 'application/json' },
          body : JSON.stringify(data)
        })
      .then(response => response.json())
      .then(data => setMessage(data.message))
      .catch(err => console.error(err, "Something went wrong!"));
    console.log(message);
    reset();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
          Full Name
        </label>
        <div className="relative mt-1">
          <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            id="name"
            placeholder="John Doe"
            className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            {...register("name", {
              required: "Name is required",
              minLength: {
                value: 2,
                message: "Name must be at least 2 characters",
              },
            })}
          />
        </div>
        {errors.name && (
          <span className="text-sm text-red-500">{errors.name.message}</span>
        )}
      </div>

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

      <div>
        <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
          Confirm Password
        </label>
        <div className="relative mt-1">
          <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
          <input
            id="confirmPassword"
            type={showConfirmPassword ? "text" : "password"}
            className="w-full pl-10 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
            {...register("confirmPassword", {
              required: "Please confirm your password",
              validate: (value) =>
                value === password || "Passwords do not match",
            })}
          />
          <button
            type="button"
            className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center text-gray-400 hover:text-gray-600"
            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
          >
            {showConfirmPassword ? (
              <EyeOff className="h-4 w-4" />
            ) : (
              <Eye className="h-4 w-4" />
            )}
            <span className="sr-only">
              {showConfirmPassword ? "Hide password" : "Show password"}
            </span>
          </button>
        </div>
        {errors.confirmPassword && (
          <span className="text-sm text-red-500">{errors.confirmPassword.message}</span>
        )}
      </div>

      <div className="flex items-start space-x-3">
        <input
          id="acceptTerms"
          type="checkbox"
          className="h-4 w-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
          {...register("acceptTerms", {
            required: "You must accept the terms and conditions",
          })}
        />
        <label htmlFor="acceptTerms" className="text-sm text-gray-700">
          I agree to the{" "}
          <Link
            to="/terms"
            className="text-resume-primary hover:underline"
          >
            terms and conditions
          </Link>
        </label>
      </div>
      {errors.acceptTerms && (
        <span className="text-sm text-red-500">{errors.acceptTerms.message}</span>
      )}

      <div className="text-red-600 font-bold">
        {message}
      </div>

      <button
        type="submit"
        className="w-full primary-button text-white py-2 rounded-md hover:opacity-90 transition-opacity"
      >
        Create Account
      </button>

      <div className="text-center text-sm">
        Already have an account?{" "}
        <Link to="/login" className="text-resume-primary hover:underline">
          Sign in
        </Link>
      </div>
    </form>
  );
};

export default RegisterForm;