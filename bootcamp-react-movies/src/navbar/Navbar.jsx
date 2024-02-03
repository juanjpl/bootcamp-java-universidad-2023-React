import React from "react";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to={"/"}>Home2</NavLink>
      <NavLink to={"/userPage"}>User Page</NavLink>
      <NavLink to={"/home"}>Home</NavLink>
      <NavLink to={"/rxjs"}>Rxjs</NavLink>
    </>
  );
};

export default Navbar;
