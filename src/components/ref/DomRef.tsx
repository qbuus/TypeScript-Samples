import React, { useRef, useEffect } from "react";

const DomRef = () => {
  const Inputref = useRef<HTMLInputElement>(null);

  useEffect(() => {
    Inputref.current?.focus();
  }, []);

  return (
    <div>
      <input type="text" ref={Inputref} />
    </div>
  );
};

export default DomRef;
