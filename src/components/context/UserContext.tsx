import React, { useState, createContext } from "react";

export type UserType = {
  name: string;
  email: string;
};

type userContextType = {
  user: UserType | null;
  setUser: React.Dispatch<React.SetStateAction<UserType | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const Context = createContext({} as userContextType);

export const UserContext = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<UserType | null>(null);

  return (
    <Context.Provider value={{ user, setUser }}>{children}</Context.Provider>
  );
};
