import { createContext, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import axiosClient from "../api/axios";

const AuthContext = createContext({});

export const AuthProvider = ({ children }) => {
  const [currentUserDetails, _setCurrentUserDetails] = useState(
    JSON.parse(localStorage.getItem("userDetails")) || {}
  );
  const [userToken, _setUserToken] = useState(
    localStorage.getItem("TOKEN") || ""
  );
  const [errors, setErrors] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [loginLoading, setLoginLoading] = useState(false);
  const navigate = useNavigate();

  const setCurrentUserDetails = ({ ...currUserDetails }) => {
    if (currUserDetails) {
      localStorage.setItem("userDetails", JSON.stringify(currUserDetails));
    } else {
      localStorage.removeItem("userDetails");
    }
    _setCurrentUserDetails(currUserDetails);
  };

  const setUserToken = (token) => {
    if (token) {
      localStorage.setItem("TOKEN", token);
    } else {
      localStorage.removeItem("TOKEN");
    }
    _setUserToken(token);
  };
  const login = async ({ ...data }) => {
    setLoginLoading(true)
    try {
      const response = await axiosClient.post("/login", data);
      setCurrentUserDetails({
        ...response.data.data.user,
        utility_provider: response.data.data.utility_provider,
        roles: response.data.data.roles,
        permissions: response.data.data.permissions,
      });
      setUserToken(response.data.data.token);
      setLoginLoading(false)
      navigate("/");
    } catch (e) {
      setLoginLoading(false)
      if (e.response.status === 422) setErrors(e.response.data.errors);
      if (e.response.status === 400) setErrorMessage(e.response.data.message);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        currentUserDetails,
        setCurrentUserDetails,
        userToken,
        setUserToken,
        errors,
        errorMessage,
        login,
        loginLoading
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const userAuthContext = () => useContext(AuthContext);
