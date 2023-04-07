import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AuthStore from "./store/auth";

const authStore = new AuthStore();

export const Context = createContext({
  authStore,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Context.Provider value={{ authStore }}>
    <App />
  </Context.Provider>
);
