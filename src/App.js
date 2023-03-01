import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/UI/Navbar/Navbar";
import Router from "./router/Router";
import "./index.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};

export default App;
