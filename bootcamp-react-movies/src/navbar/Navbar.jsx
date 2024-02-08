import React from "react";
import { routes } from "./routes";
import { BrowserRouter, Link, NavLink, Route, Routes } from "react-router-dom";

import { Menubar } from "primereact/menubar";
import { InputText } from "primereact/inputtext";
import { Badge } from "primereact/badge";
import { Avatar } from "primereact/avatar";

const Navbar = () => {
  const itemRenderer = (item) => (
    <NavLink className="flex align-items-center p-menuitem-link" >
    <span className={item.icon} />
    <span className="mx-2">{item.label}</span>
    {item.badge && <Badge className="ml-auto" value={item.badge} />}
    {item.shortcut && <span className="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{item.shortcut}</span>}
</NavLink>
  );
  const items = [
    {
      label: "Home",
      icon: "pi pi-home",
      url: `${routes.public.INDEX}`,
      direction:`${routes.public.INDEX}`
    },
    {
      label: "Pokemon",
      icon: "pi pi-star",
      url: `${routes.public.POKE_HOME}`,
    },
    {
      label: "Profile",
      icon: "pi pi-star",
      url: `${routes.public.PROFILE}`,
    },
    {
      label: "Login",
      icon: "pi pi-star",
      url: `${routes.public.LOGIN}`,
    },
    {
      label: "Projects",
      icon: "pi pi-search",
      items: [
        {
          label: "Core",
          icon: "pi pi-bolt",
          shortcut: "⌘+S",
          template: itemRenderer,
        },
        {
          label: "Blocks",
          icon: "pi pi-server",
          shortcut: "⌘+B",
          template: itemRenderer,
        },
        {
          label: "UI Kit",
          icon: "pi pi-pencil",
          shortcut: "⌘+U",
          template: itemRenderer,
        },
        {
          separator: true,
        },
        {
          label: "Templates",
          icon: "pi pi-palette",
          items: [
            {
              label: "Apollo",
              icon: "pi pi-palette",
              badge: 2,
              template: itemRenderer,
            },
            {
              label: "Ultima",
              icon: "pi pi-palette",
              badge: 3,
              template: itemRenderer,
            },
          ],
        },
      ],
    },
    {
      label: "Contact",
      icon: "pi pi-envelope",
      badge: 3,
      template: itemRenderer,
    },
  ];

  const start = (
    <img
      alt="logo"
      src="https://primefaces.org/cdn/primereact/images/logo.png"
      height="40"
      className="mr-2"
    ></img>
  );
  const end = (
    <div className="flex align-items-center gap-2">
      <InputText
        placeholder="Search"
        type="text"
        className="w-8rem sm:w-auto"
      />
      <Avatar
        image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
        shape="circle"
      />
    </div>
  );
  return (
    <>
      <div className="card">
        <Menubar model={items} start={start} end={end} />
      </div>

      <NavLink to={routes.public.INDEX}>Home2</NavLink>
      <NavLink to={routes.public.USER_PAGE}>User Page</NavLink>
      <NavLink to={routes.public.HOME}>Home</NavLink>
      <NavLink to={routes.public.RXJS}>Rxjs</NavLink>
      <NavLink to={routes.public.REQ_RES}>ReqAPI</NavLink>
      <NavLink to={routes.public.POKE_HOME}>PokeApi</NavLink>
      <NavLink to={routes.public.CONTEXT}>Context</NavLink>
      <NavLink to={routes.private.ACCOUNT}>Account</NavLink>
      <NavLink to={routes.private.ADMIN}>Admin</NavLink>
      <NavLink to={routes.public.PROFILE}>Profile</NavLink>
      <NavLink to={routes.public.LOGIN}>Login</NavLink>
    </>
  );
};

export default Navbar;
