import { Loader2 } from "lucide-react";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, isLoading, user } = useSelector(
    (state) => state.auth
  );

  if (isLoading) {
    return (
      <div className="grid place-items-center h-screen">
        <Loader2 className="animate-spin" size={50} />
      </div>
    );
  } else if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <div>{children}</div>;
};

export default ProtectedRoute;
