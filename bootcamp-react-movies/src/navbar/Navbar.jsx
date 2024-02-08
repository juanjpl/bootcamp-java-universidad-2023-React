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
      <NavLink to={routes.public.POKE_HOME}>PokeApi</NavLink>
      <NavLink to={routes.public.CONTEXT}>Context</NavLink>
      <NavLink to={routes.private.ACCOUNT}>Account</NavLink>
      <NavLink to={routes.private.ADMIN}>Admin</NavLink>
    </>
  );
};

export default Navbar;
