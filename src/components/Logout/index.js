import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

//Boton para deloguear
const LogoutButton = () => {
  const { logout } = useAuth0();
  return <button className="bg-red-600 p-2" onClick={() => logout()}>logout</button>;
};

export default LogoutButton;