import React from "react";
import { Name } from "./Person.types";

type People = {
  names: Name[];
};

const PersonList = (props: People) => {
  return (
    <div style={{ display: "flex", flexDirection: "row", gap: "14px" }}>
      {props.names.map((name) => (
        <h2 key={name.first}>
          {name.first} {name.last}
        </h2>
      ))}
    </div>
  );
};

export default PersonList;
