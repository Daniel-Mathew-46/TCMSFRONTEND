import React from 'react'

const ForgotPassword = () => {
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
          Give us your email so we can send you a reset link.Thank You!
        </h2>
        <form className="mt-6 space-y-6" onSubmit="">
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
            //   value={email}
            //   onChange={(e) => setEmail(e.target.value)}
              className={`bg-gray-50 border border-gray-300 text-gray-900
                     sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 
                     dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500`}
              placeholder="name@company.com"
            />
            {/* {errors.email && (
              <p className="mt-2 text-sm text-red-600 dark:text-red-500">
                <span className="font-medium">{errors.email[0]}</span>
              </p>
            )} */}
          </div>
          <button
            type="submit"
            className="w-full px-5 py-3 text-base font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Send Email
          </button>
        </form>
      </div>
    </div>
  )
}

export default ForgotPassword