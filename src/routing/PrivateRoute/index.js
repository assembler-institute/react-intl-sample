import React from "react";

import { useAuth } from "../../context/auth";
import { Redirect, Route } from "react-router-dom";

function PrivateRoute({ component, ...options }) {
  const { state } = useAuth();
  const { isAuth } = state;

  console.log(isAuth);
  return (
    <>
      {isAuth ? (
        <Route {...options} component={component} />
      ) : (
        <Redirect to="/login" />
      )}
    </>
  );
}

export default PrivateRoute;
