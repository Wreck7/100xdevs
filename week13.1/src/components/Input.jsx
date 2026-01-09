import React from "react";

const Input = React.forwardRef(function Input(
  { className = "", ...props },
  ref
) {
  return (
    <input
      ref={ref}
      className={`outline-none border rounded-md ${className}`}
      {...props}
    />
  );
});

export default Input;
