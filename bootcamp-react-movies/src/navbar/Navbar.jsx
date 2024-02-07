import React from "react";
import { routes } from "./routes";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <NavLink to={routes.public.INDEX}>Home2</NavLink>
      <NavLink to={routes.public.USER_PAGE}>User Page</NavLink>
      <NavLink to={routes.public.HOME}>Home</NavLink>
      <NavLink to={routes.public.RXJS}>Rxjs</NavLink>
      <NavLink to={routes.public.REQ_RES}>ReqAPI</NavLink>
      <NavLink to={routes.public.POKE_HOME}>ReqAPI</NavLink>
    </>
  );
};

export default Navbar;
