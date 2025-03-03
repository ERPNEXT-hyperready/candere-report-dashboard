import React, { useState, FormEvent, useEffect } from "react";
import "./login.css";
import { useDispatch, useSelector } from "react-redux";
import {  login } from "../features/auth/authSlice";
import { toast } from "sonner";
import {  useNavigate } from "react-router-dom";
import { AppDispatch } from "../app/store";
import { Button } from "@/components/ui/button";
import { MailOpen } from "lucide-react";
import CandereKalyan from "@/assets/Canderekalyan.svg";

// import Loader from "../components/loader/loader";

// interface LoginProps {
//   onLogin: (credentials: { email: string; password: string }) => void;
// }

const Login: any = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch<AppDispatch>(); // ✅ Correctly typed dispatch
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state: any) => state.auth
  );
  interface FormData {
    email: string;
    password: string;
  }

  const [formData, setFormData] = useState<FormData>({
    email: "", // Fixed typo 'emai' -> 'email'
    password: "",
  });

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      // navigate('/dashboard')
      // dispatch(reset())
    }
  }, [user, isError, isSuccess, message, navigate, dispatch]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    console.log(e.target, "..................////////");

    const userData = {
      email: formData.email,
      password: formData.password,
    };

    dispatch(login(userData));
  };

  return (
    <div className="min-h-screen w-screen grid grid-cols-1 lg:grid-cols-2 bg-white">
      <div className="w-full hidden lg:block">
        <img srcSet="https://candere-file.s3.ap-south-1.amazonaws.com/diamond.jpg" alt="Gold" className="h-screen w-full" />
      </div>

      <div className="flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg sm:w-96">
          <div className="flex justify-center items-center mb-4">
            <img src={CandereKalyan} alt="logo" className="w-full h-28" />
          </div>

          <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
            Login to Candere
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                placeholder="Enter your email"
                required
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md text-sm shadow-sm placeholder-gray-400
              focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500"
                placeholder="Enter your password"
                required
              />
            </div>

            <div className="pt-5">
              <Button
                type="submit"
                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-1"
                disabled={isLoading}
              >
                <MailOpen />
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
