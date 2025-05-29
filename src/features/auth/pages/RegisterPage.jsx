import React from "react";
import RegisterForm from "../components/RegisterForm";
import { Toaster } from "react-hot-toast";
import { Link } from "react-router-dom";

const registerPage = () => {
  return (
    <section className="bg-gray-50 py-6">
      <Toaster position="top-right" />
      <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
        <Link
        to={"/"}
          className="flex items-center mb-6 text-2xl font-semibold text-gray-900"
        >
          <img
            className="w-8 h-8 mr-2"
            src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg"
            alt="logo"
          />
          Voucher App
        </Link>
        <div className="w-full bg-white rounded-lg shadow border md:mt-0 sm:max-w-md xl:p-0">
          <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
            <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
              Create an account
            </h1>
            <RegisterForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default registerPage;
