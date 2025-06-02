import { Link, useNavigate } from "react-router-dom";
import BtnSpinner from "../../../components/BtnSpinner";
import useLogin from "../hooks/useLogin";

const LoginForm = () => {
  const { register, handleSubmit, isSubmitting, handleLogin } = useLogin();

  return (
    <form className="space-y-4 md:space-y-6" action="#">
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
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
          placeholder="name@gmail.com"
          required
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
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-sky-600 focus:border-sky-600 block w-full p-2.5"
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-start">
          <div className="flex items-center h-5">
            <input
              id="remember"
              aria-describedby="remember"
              type="checkbox"
              className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-sky-300"
              required
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="remember" className="text-gray-500">
              Remember me
            </label>
          </div>
        </div>
        <a
          href="#"
          className="text-sm font-medium text-sky-600 hover:underline"
        >
          Forgot password?
        </a>
      </div>
      <button
        type="submit"
        disabled={isSubmitting}
        onClick={handleSubmit(handleLogin)}
        className="w-full flex justify-center items-center gap-3 text-white bg-sky-600 hover:bg-sky-700 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
      >
        Sign in
        {isSubmitting && <BtnSpinner />}
      </button>
      <p className="text-sm font-light text-gray-500">
        Don't have an account yet?{" "}
        <Link
          to={"/register"}
          className="font-medium text-sky-600 hover:underline"
        >
          Sign up
        </Link>
      </p>
    </form>
  );
};

export default LoginForm;
