import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import { UserPage } from "./user/page/UserPage";
import { Suspense } from "react";
import { UserDetails } from "./user/user-ui/ui/UserDetails";
import Navbar from "./navbar/Navbar";
import { routes } from "./navbar/routes";
import { Component1 } from "./views/components/Component1";
import { ReqResPage } from "./reqres/ui/ReqResPage";
import { PokemonHome } from "./pokemon/ui/PokemonHome";
import AuthGuard from "./commons/AuthGuard";
import { Account } from "./account/Account";
import { Admin } from "./admin/Admin";

export function AppRouter() {
  return (
    <Suspense fallback={<>...Cargando...</>}>
      <BrowserRouter>
        <Navbar />

        <hr />
        <Routes>
          <Route path={routes.public.INDEX} element={<>Home Page</>}></Route>
          <Route path={routes.public.USER_PAGE} element={<UserPage />}></Route>
          <Route path={routes.public.HOME} element={<UserDetails />}></Route>
          <Route path={routes.public.RXJS} element={<Component1 />}></Route>
          <Route path={routes.public.POKE_HOME} element={<PokemonHome />}></Route>
          <Route path={routes.public.CONTEXT} element={<Component1 />}></Route>

          {/* rutas privadas : el usuario debe estar registrado */}

          <Route element={<AuthGuard />}>
            <Route
              path={routes.private.ACCOUNT  }
              element={<Account/>}
            ></Route>
             <Route path={routes.private.ADMIN} element={<Admin/>}></Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </Suspense>
  );
}
