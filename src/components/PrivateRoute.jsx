import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const auth = localStorage.getItem("token");

export const PrivateRoute = () => {
  return auth ? <Outlet /> : <Navigate to="/" />;
};
