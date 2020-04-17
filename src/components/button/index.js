import * as React from "react";
import cn from "classnames";
import "./button.css";

const Button = ({
  children,
  size = "medium",
  color = "black",
  status,
  expanded = false,
  centered = false,
  className,
  ...otherProps
}) => {
  const classes = cn("button", className, size, color, status, {
    expanded,
    centered
  });

  return (
    <button className={classes} {...otherProps}>
      {children}
    </button>
  );
};

export default Button;
