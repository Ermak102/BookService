import React from "react";
import Input from "./UI/Input/Input";
import Button from "../components/UI/Button/Button";
import "../styles/login.css";

const Login = () => {
  return (
    <form className="login">
      <div className="login__wrapper">
        <div className="login__title">Login</div>
        <Input
          className="login__input"
          type="text"
          placeholder="email@mail.ru"
        />
        <Input
          className="login__input"
          type="password"
          placeholder="password"
        />
        <Button>Login</Button>
      </div>
    </form>
  );
};

export default Login;
