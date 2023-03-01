import React, { useState } from "react";
import Input from "../UI/Input/Input";
import InputLabel from "../UI/Input/InputLabel";

const RegUser = () => {
  const [user, setUser] = useState({
    surname: "",
    name: "",
    patronymic: "",
    email: "",
    nikName: "",
    password: "",
  });

  return (
    <div className="reg__user">
      <InputLabel
        name="Фамилия"
        value={user.surname}
        onChange={(e) => setUser({ ...user, surname: e.target.value })}
        type="text"
      />
      <InputLabel
        name="Имя"
        value={user.name}
        onChange={(e) => setUser({ ...user, name: e.target.value })}
        type="text"
      />
      <InputLabel
        name="Отчество"
        value={user.patronymic}
        onChange={(e) => setUser({ ...user, patronymic: e.target.value })}
        type="text"
      />
      <InputLabel
        name="Email"
        value={user.email}
        onChange={(e) => setUser({ ...user, email: e.target.value })}
        type="email"
      />
      <InputLabel
        name="Никнейм"
        value={user.nikName}
        onChange={(e) => setUser({ ...user, nikName: e.target.value })}
        type="text"
      />
      <InputLabel
        name="Пароль"
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
      />
    </div>
  );
};

export default RegUser;
