import React from "react";
import { useInput } from "../../hooks/useInput";
import InputLabel from "../UI/Input/InputLabel";
import Message from "./Message";

const RegUser = () => {
  const surname = useInput("", {
    isEmpty: true,
    maxLength: 50,
    cyrillic: true,
  });
  const name = useInput("", { isEmpty: true, maxLength: 25, cyrillic: true });
  const patronymic = useInput("", { maxLength: 25, cyrillic: true });
  const email = useInput("", { isEmpty: true, email: true });
  const nikname = useInput("");
  const password = useInput("", {
    isEmpty: true,
    minLength: 8,
    specialSymbol: true,
    includeNumber: true,
    password: true,
  });

  return (
    <div className="reg__user">
      <Message
        visible={surname.isExit && surname.errorMessage}
        message={surname.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Фамилия"
        value={surname.value}
        onChange={(e) => surname.onChange(e)}
        onBlur={(e) => surname.onExitEnter(e)}
        type="text"
      />
      <Message
        visible={name.isExit && name.errorMessage}
        message={name.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Имя"
        value={name.value}
        onChange={(e) => name.onChange(e)}
        onBlur={(e) => name.onExitEnter(e)}
        type="text"
      />
      <InputLabel
        placeholder="Отчество"
        value={patronymic.value}
        onChange={(e) => patronymic.onChange(e)}
        onBlur={(e) => patronymic.onExitEnter(e)}
        type="text"
      />

      <Message
        visible={email.isExit && email.errorMessage}
        message={email.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Email"
        value={email.value}
        onChange={(e) => email.onChange(e)}
        onBlur={(e) => email.onExitEnter(e)}
        type="email"
      />

      <InputLabel
        placeholder="Никнейм"
        value={nikname.value}
        onChange={(e) => nikname.onChange(e)}
        onBlur={(e) => nikname.onExitEnter(e)}
        type="text"
      />

      <Message
        visible={password.isExit && password.errorMessage}
        message={password.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Пароль"
        value={password.value}
        onChange={(e) => password.onChange(e)}
        onBlur={(e) => password.onExitEnter(e)}
        type="password"
      />
    </div>
  );
};

export default RegUser;
