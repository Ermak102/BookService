import { observer } from "mobx-react-lite";
import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";
import { Context } from "..";
import { publicRoutes, userRoutes } from "./routes";

const Router = observer(() => {
  const { authStore } = useContext(Context);

  console.log(authStore.isAuth);

  return (
    <Routes>
      {!authStore.isAuth
        ? publicRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
              exact={route.exact}
            />
          ))
        : userRoutes.map((route) => (
            <Route
              key={route.path}
              path={route.path}
              element={route.component}
              exact={route.exact}
            />
          ))}
    </Routes>
  );
});

export default Router;
