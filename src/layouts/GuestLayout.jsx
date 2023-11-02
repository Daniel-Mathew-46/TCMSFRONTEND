import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { userAuthContext } from "../context/AuthContext";

const GuestLayout = () => {
    const { userToken } = userAuthContext();
    return !userToken ? <Outlet /> : <Navigate to="/" />;
};

export default GuestLayout;
