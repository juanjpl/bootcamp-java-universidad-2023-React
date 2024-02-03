import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { UserPage } from "./user/page/UserPage";
import { Suspense } from "react";
import { UserDetails } from "./user/user-ui/ui/UserDetails";

export function AppRouter() {
  return (
    <Suspense fallback={<>...Cargando...</>}>
      <BrowserRouter>
        <NavLink to={"/"}>Home2</NavLink>
        <NavLink to={"/userPage"}>User Page</NavLink>
        <NavLink to={"/home"}>Home</NavLink>

        <hr />
        <Routes>
          <Route path="/" element={<>Home Page</>}></Route>
          <Route path="/userPage" element={<UserPage />}></Route>
          <Route path="/home" element={<UserDetails />}></Route>
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
