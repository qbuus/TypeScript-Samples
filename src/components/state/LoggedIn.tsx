import React, { useState } from "react";

const LoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => {
    setIsLoggedIn(true);
  };
  const logout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div>
      <button onClick={login}></button>
      <button onClick={logout}></button>
      <div>User is {isLoggedIn ? "logged in" : "logged out"}</div>
    </div>
  );
};

export default LoggedIn;
