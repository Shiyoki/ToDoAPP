import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Boton que permite loguear a travez de auth0
const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();
  return (
    <div>
      <button className="bg-blue-600 p-2" onClick={() => loginWithRedirect()}>login</button>
    </div>
  );
};

export default LoginButton;