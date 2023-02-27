import React from "react";

type Oscarek = {
  children: React.ReactNode;
};

const Oscar = (props: Oscarek) => {
  return <div>{props.children}</div>;
};

export default Oscar;
