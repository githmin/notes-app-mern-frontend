import { Navigate, Outlet } from "react-router-dom";
import React from "react";

const auth = false;

const PrivateRoutes = () => {
//   auth = true;
};

export const PrivateRoute = () => {
  return auth ? <Outlet /> : <Navigate to="/" />;
};
