import React from "react";
import RegInput from "../RegInput";

const RegUserForm = ({ user }) => {
  return (
    <form className="user_reg_form">
      <div className="user__fields__wrapper">
        <div className="user__field-surname">
          <RegInput
            field={user.surname}
            placeholder="Фамилия"
            onChange={(e) => user.surname.onChange(e)}
          />
        </div>
        <div className="user__field-name">
          <RegInput
            field={user.name}
            placeholder="Имя"
            onChange={(e) => user.name.onChange(e)}
          />
        </div>
      </div>

      <RegInput
        field={user.patronymic}
        placeholder="Отчество"
        onChange={(e) => user.patronymic.onChange(e)}
        defaultMessage=""
      />

      <RegInput
        field={user.email}
        placeholder="Email"
        onChange={(e) => user.email.onChange(e)}
        type="email"
      />

      <RegInput
        field={user.nikName}
        placeholder="Ник"
        onChange={(e) => user.nikName.onChange(e)}
      />

      <RegInput
        field={user.password}
        onChange={(e) => user.password.onChange(e)}
        placeholder="Пароль"
        inputType="password"
      />
    </form>
  );
};

export default RegUserForm;
