import React from 'react'
import { Navigate } from 'react-router-dom'
import axiosClient from '../../api/axios';
import { userAuthContext } from '../../context/AuthContext';

function Logout() {
    const {setCurrentUserDetails, setUserToken} = userAuthContext()
    
  const logout = async () => {
    try {
      const response = await axiosClient.post("/logout");

      if(response.data.success) {
        setCurrentUserDetails({});
        setUserToken(null);
      }
    } catch (e) {
      console.log(e);
    }
  };
  logout();
  return (
    <Navigate to={'/login'}/>
  )
}

export default Logout