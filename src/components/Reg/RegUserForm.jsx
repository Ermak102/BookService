import React from "react";
import InputLabel from "../UI/Input/InputLabel";
import Message from "./Message";

const RegUserForm = ({ user }) => {
  return (
    <form className="user_reg_form">
      <div className="user__fields__wrapper">
        <div className="user__field-surname">
          <Message
            visible={user.surname.isExit && user.surname.errorMessage}
            message={user.surname.errorMessage}
            defaultValue={"* обязательное поле"}
          />
          <InputLabel
            placeholder="Фамилия"
            value={user.surname.value}
            onChange={(e) => user.surname.onChange(e)}
            onBlur={(e) => user.surname.onExitEnter(e)}
            valid={user.surname.isExit ? user.surname.isValid() : "default"}
            type="text"
          />
        </div>
        <div className="user__field-name">
          <Message
            visible={user.name.isExit && user.name.errorMessage}
            message={user.name.errorMessage}
            defaultValue={"* обязательное поле"}
          />
          <InputLabel
            placeholder="Имя"
            value={user.name.value}
            onChange={(e) => user.name.onChange(e)}
            onBlur={(e) => user.name.onExitEnter(e)}
            valid={user.name.isExit ? user.name.isValid() : "default"}
            type="text"
          />
        </div>
      </div>

      <Message
        visible={user.patronymic.isExit && user.patronymic.errorMessage}
        message={user.patronymic.errorMessage}
      />
      <InputLabel
        placeholder="Отчество"
        value={user.patronymic.value}
        onChange={(e) => user.patronymic.onChange(e)}
        onBlur={(e) => user.patronymic.onExitEnter(e)}
        valid={user.patronymic.isExit ? user.patronymic.isValid() : "default"}
        type="text"
      />

      <Message
        visible={user.email.isExit && user.email.errorMessage}
        message={user.email.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Email"
        value={user.email.value}
        onChange={(e) => user.email.onChange(e)}
        onBlur={(e) => user.email.onExitEnter(e)}
        valid={user.email.isExit ? user.email.isValid() : "default"}
        type="email"
      />

      <Message
        visible={user.nikName.isExit && user.nikName.errorMessage}
        message={user.nikName.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Никнейм"
        value={user.nikName.value}
        onChange={(e) => user.nikName.onChange(e)}
        onBlur={(e) => user.nikName.onExitEnter(e)}
        valid={user.nikName.isExit ? user.nikName.isValid() : "default"}
        type="text"
      />

      <Message
        visible={user.password.isExit && user.password.errorMessage}
        message={user.password.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Пароль"
        value={user.password.value}
        onChange={(e) => user.password.onChange(e)}
        onBlur={(e) => user.password.onExitEnter(e)}
        valid={user.password.isExit ? user.password.isValid() : "default"}
        type="password"
      />
    </form>
  );
};

export default RegUserForm;
