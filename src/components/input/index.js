import React from "react";
import cn from "classnames";
import "./input.css";

const Input = ({
  children,
  size = "medium",
  status,
  label,
  expanded = false,
  centered = false,
  className,
  value,
  setValue,
  ...otherProps
}) => {
  const classes = cn("input", className, size, status, {
    expanded,
    centered
  });

  return (
    <>
      <label className="input-label">{label}</label>
      <input
        value={value}
        onChange={e => setValue(e.target.value)}
        type="text"
        className={classes}
        {...otherProps}
      >
        {children}
      </input>
    </>
  );
};

export default Input;
