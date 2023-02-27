import React from "react";

type Heading = {
  children: string;
};

const Heading = (props: Heading) => {
  return <h2>{props.children}</h2>;
};

export default Heading;
