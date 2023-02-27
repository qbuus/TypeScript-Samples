import React from "react";

type HorizontalPos = "left" | "center" | "right";
type VerticalPos = "top" | "center" | "bottom";

type ToastProps = {
  position:
    | Exclude<`${HorizontalPos}-${VerticalPos}`, "center center">
    | "center";
};

const Toast = ({ position }: ToastProps) => {
  return <div>Toast - {position}</div>;
};

export default Toast;
