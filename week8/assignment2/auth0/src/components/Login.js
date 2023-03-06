import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

const Login = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button
        className="px-4 text-dark btn btn-success rounded-pill"
        onClick={() => loginWithRedirect()}
        id="login"
      >
        Log In
      </button>
    </div>
  );
};

export default Login;
