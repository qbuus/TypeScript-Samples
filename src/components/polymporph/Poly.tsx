import React from "react";

type PolyProps<E extends React.ElementType> = {
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode;
  as?: E;
};

type TextProps<E extends React.ElementType> = PolyProps<E> &
  Omit<React.ComponentProps<E>, keyof PolyProps<E>>;

const Poly = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: PolyProps<E>) => {
  const Comp = as || "div";

  return <Comp className={`class-${size}-${color}`}>{children}</Comp>;
};

export default Poly;
