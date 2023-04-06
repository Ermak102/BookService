import React from "react";
import { NavLink } from "react-router-dom";

const Link = ({ activeStyle, defaultStyle, path, children }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) => (isActive ? activeStyle : defaultStyle)}
    >
      {children}
    </NavLink>
  );
};

export default Link;
