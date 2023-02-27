import React from "react";
import { useContext } from "react";
import { context } from "./ThemeContext";

const Box = () => {
  const theme = useContext(context);

  return (
    <div
      style={{
        all: "unset",
        cursor: "pointer",
        backgroundColor: theme.secondary.main,
        color: theme.secondary.text,
      }}
    >
      Box
    </div>
  );
};

export default Box;
