import React from "react";

const Button = ({
  styling = "",
  title = "Button",
  children,
  ...buttonProps
}) => {
  return (
    <button
      className={` ${styling} font-semibold text-l justify-center content-center items-center mx-auto `}
      {...buttonProps}
    >
      {children}
    </button>
  );
};

export default Button;
