import Navbar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./components/home";
import { ForgotPassword, Login, Logout } from "./components/auth";
import { AuthLayout, GuestLayout } from "./layouts";

function App() {
  return (
    <div className=" dark:bg-gray-900 dark:text-white p-4 w-full h-screen overflow-y-auto">
      <div className=" max-w-7xl h-full mx-auto mt-6">
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Home />} />
            <Route path="/customers" element={<Home />} />
            <Route path="/logout" element={<Logout />} />
          </Route>
          <Route element={<GuestLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/forgot_password" element={<ForgotPassword />} />
          </Route>
        </Routes>
        <div className=" mt-2 w-full justify-center items-start dark:bg-gray-900 ">
          <p className=" text-center text-sm text-gray-500 mb-4 dark:text-white">
            &copy; 2022-2023{" "}
            <a href="/" className="hover:underline" target="_blank">
              TCMS
            </a>
            . All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}
export default App;
