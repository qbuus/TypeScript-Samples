import { Login } from "./Login";
import React from "react";
import { Profile } from "./Profile";

type Private = {
  isLoggedIn: boolean;
  Component: React.ComponentType<Profile>;
};

export const Private = ({ isLoggedIn, Component }: Private) => {
  if (isLoggedIn) {
    return <Component name="Wisz" />;
  } else {
    return <Login />;
  }
};
