import React, { useEffect } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAuthStore } from "../Auth/authStore";

const PrivateRoute = () => {
  const { authenticated, restoreAuth } = useAuthStore();

  useEffect(() => {
    restoreAuth();
  }, []);

  return authenticated ? <Outlet /> : <Navigate to="/sign-in" />;
};

export default PrivateRoute;
