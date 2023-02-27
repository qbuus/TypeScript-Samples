import React from "react";

type StatusProps = {
  status: "loading" | "success" | "error";
};

const template = (props: StatusProps) => {
  let message;

  if (props.status === "loading") {
    message = "Loading...";
  } else if (props.status === "success") {
    message = "success";
  } else if (props.status === "error") {
    message = "error";
  }

  return (
    <div>
      <h2>Status - {message}</h2>
    </div>
  );
};

export default template;
