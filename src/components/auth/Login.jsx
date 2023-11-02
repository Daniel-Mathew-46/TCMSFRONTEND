import { useState } from "react";
import { userAuthContext } from "../../context/AuthContext";

function Login() {
  const { login, loginLoading, errors, errorMessage } = userAuthContext();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    await login({ email, password });
  };
  return (
    <div className="flex flex-col items-center justify-center px-6 mx-auto pt:mt-0 dark:bg-gray-900">
      <a
        href=""
        className="flex items-center justify-center text-2xl font-semibold lg:mb-10 dark:text-white"
      >
        <span>Token and Customer Management System</span>
      </a>
      <div className="w-full max-w-xl p-6 sm:p-8 bg-white rounded-lg shadow dark:bg-gray-800">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
          Sign in
        </h2>
        {errorMessage && (
          <p className="mt-2 text-sm text-red-600 dark:text-red-500">
            <span className="font-medium">{errorMessage}</span>
          </p>
        )}
        <form className="mt-6 space-y-6" onSubmit={handleLogin}>
          <div>
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className={`bg-gray-50 border border-gray-300 text-gray-900
                     sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                     ${errors.email && "border-red-500 text-red-900"}
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="name@company.com"
            />
            {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{errors.email[0]}</span>
              </p>
            )}
          </div>
          <div>
            <label
              htmlFor="password"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              className={`bg-gray-50 border border-gray-300 text-gray-900 
                    sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                    ${errors.password && "border-red-500 text-red-900"}
                    dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500`}
            />
            {errors.password && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{errors.password[0]}</span>
              </p>
            )}
          </div>
          <div className="flex items-start">
            <a
              href="/forgot_password"
              className="ml-auto text-sm text-blue-700 hover:underline dark:text-primary-500"
            >
              Forgot Password?
            </a>
          </div>
          <button
            disabled={loginLoading}
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            {loginLoading && (
              <svg
                aria-hidden="true"
                role="status"
                className="inline w-6 h-6 mr-3 text-white animate-spin"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="#E5E7EB"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentColor"
                />
              </svg>
            )}
            {!loginLoading && "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
