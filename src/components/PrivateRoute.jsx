import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const auth = false;



export const PrivateRoute = () => {
  return auth ? <Outlet /> : <Navigate to="/" />;
};
