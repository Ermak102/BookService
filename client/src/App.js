import React, { useContext, useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Router from "./router/Router";
import "./index.css";
import { observer } from "mobx-react-lite";
import { Context } from ".";
import userStore from "./store/user";
import Loader from "./components/UI/Loader/Loader";

const App = observer(() => {
  const { authStore } = useContext(Context);

  useEffect(() => {
    authorization();
  }, [authStore.isAuth]);

  const authorization = async () => {
    if (localStorage.getItem("userToken") == null) {
      return;
    }

    await userStore.getUser();
    console.log(userStore.user);

    if (userStore.user !== null) authStore.setAuth(true);
  };

  if (userStore.isLoading) {
    return <Loader />;
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
});

export default App;
