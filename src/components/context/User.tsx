import { useContext } from "react";
import { Context } from "./UserContext";

const User = () => {
  const context = useContext(Context);

  const handleLogin = () => {
    context.setUser({
      name: "bebe",
      email: "bebe@bebe.com",
    });
  };
  const handleLogout = () => {
    context.setUser(null);
  };

  return (
    <div>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <div>user name is {context.user?.name}</div>
    </div>
  );
};

export default User;
