import { Navigate, Outlet } from "react-router-dom";
import React from "react";
import Dashboard from "./Dashboard";

export const PrivateRoute = () => {
  const auth = localStorage.getItem("token");
  return <div>{auth ? <Outlet /> : <Navigate to="/" />}</div>;
};
