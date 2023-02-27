import { MouseEvent } from "react";

type But = {
  click: (e: MouseEvent<HTMLButtonElement>, id: number) => void;
};

const Button = (props: But) => {
  return (
    <button onClick={(e) => props.click(e, 1)} type="button">
      Button
    </button>
  );
};

export default Button;
