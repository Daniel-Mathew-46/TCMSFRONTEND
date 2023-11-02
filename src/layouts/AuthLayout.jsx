import React from "react";
import { userAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Navbar from "../components/navbar";

const AuthLayout = () => {
  const { userToken } = userAuthContext();
  return userToken ? <>
  <Navbar/>
  <Outlet />
  </> : <Navigate to="/login" />;
};

export default AuthLayout;
