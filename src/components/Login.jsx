import React, { useContext, useEffect } from "react";
import Button from "../components/UI/Button/Button";
import "../styles/login.css";
import RegInput from "./Reg/RegInput";
import { emailField, passwordField } from "./Reg/User/RegUserFields";
import { useInput } from "../hooks/useInput";
import { Context } from "../index.js";
import Error from "./UI/Error/Error";
import { observer } from "mobx-react-lite";
import { useNavigate } from "react-router-dom";

const Login = observer(() => {
  const email = useInput("", emailField);
  const password = useInput("", passwordField);

  const navigate = useNavigate();
  const { authStore } = useContext(Context);

  useEffect(() => {
    authStore.setErrors(null);
  }, []);

  const login = async (e) => {
    e.preventDefault();

    await authStore.login(email.value, password.value);

    if (authStore.errors === null) {
      navigate("/myTrade");
    }
  };

  return (
    <form className="login">
      <div className="login__wrapper">
        <div className="login__title">Логин</div>

        <RegInput
          placeholder="email@mail.ru"
          field={email}
          onChange={(e) => email.onChange(e)}
          defaultMessage=""
          inputType="email"
        />

        <RegInput
          placeholder="пароль"
          field={password}
          onChange={(e) => password.onChange(e)}
          defaultMessage=""
          inputType="password"
        />

        {<Error message={authStore.errors} />}

        <Button onClick={(e) => login(e)}>Войти</Button>
      </div>
    </form>
  );
});

export default Login;
