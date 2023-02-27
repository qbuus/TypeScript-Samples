import React from "react";

type Random = {
  value: number;
};

type Positive = Random & {
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};
type Negative = Random & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};
type Zero = Random & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type NumberProps = Positive | Negative | Zero;

const Restriction = ({
  value,
  isNegative,
  isPositive,
  isZero,
}: NumberProps) => {
  return (
    <div>
      {value} {isPositive && "positive"} {isNegative && "negative"}
      {isZero && "zero"}
    </div>
  );
};

export default Restriction;
