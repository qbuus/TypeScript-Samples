import React, { useState } from "react";

type AuthUser = {
  name: string;
  email: string;
};

const User = () => {
  const [user, setUser] = useState<AuthUser>({} as AuthUser);

  const login = () => {
    setUser({
      name: "darek",
      email: "darek@example.com",
    });
  };

  return (
    <div>
      <button onClick={login}></button>
      <div>User name is {user.name}</div>
      <div>User email is {user.email}</div>
    </div>
  );
};

export default User;
