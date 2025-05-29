import React from "react";
import { useForm } from "react-hook-form";
import toast, { Toaster } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import { Register } from "../../../services/auth";
import BtnSpinner from "../../../components/BtnSpinner";

const RegisterForm = () => {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm();

  const handleRegister = async (data) => {
    const res = await Register(data);

    const json = await res.json();

    if (res.status === 200) {
      toast.success("Account created successfully");
      navigate("/login");
    } else {
      toast.error(json.message);
    }
  };

  return (
    <form className="space-y-4 md:space-y-6" action="#">
      <div>
        <label
          htmlFor="name"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your name
        </label>
        <input
          type="text"
          id="name"
          {...register("name")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
          placeholder="name"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Your email
        </label>
        <input
          type="email"
          id="email"
          {...register("email")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
          placeholder="name@gmail.com"
        />
      </div>
      <div>
        <label
          htmlFor="password"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Password
        </label>
        <input
          type="password"
          id="password"
          {...register("password")}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
        />
      </div>
      <div>
        <label
          htmlFor="password_confirmation"
          className="block mb-2 text-sm font-medium text-gray-900"
        >
          Confirm password
        </label>
        <input
          type="password"
          id="password_confirmation"
          {...register("password_confirmation")}
          placeholder="••••••••"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
        />
      </div>
      <div className="flex items-start">
        <div className="flex items-center h-5">
          <input
            id="terms"
            aria-describedby="terms"
            type="checkbox"
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sky-300"
            required
          />
        </div>
        <div className="ml-3 text-sm">
          <label htmlFor="terms" className="font-light text-gray-500">
            I accept the{" "}
            <a className="font-medium text-sky-600 hover:underline" href="#">
              Terms and Conditions
            </a>
          </label>
        </div>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        onClick={handleSubmit(handleRegister)}
        className="w-full flex gap-3 justify-center items-center text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Create an account
        {isSubmitting && <BtnSpinner />}
      </button>
      <p className="text-sm font-light text-gray-500">
        Already have an account?{" "}
        <Link
          to={"/login"}
          className="font-medium text-sky-600 hover:underline"
        >
          Login here
        </Link>
      </p>
    </form>
  );
};

export default RegisterForm;
