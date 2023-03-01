import React, { useState } from "react";
import RegAddress from "../components/Reg/RegAddress";
import RegUser from "../components/Reg/RegUser";
import Button from "../components/UI/Button/Button";
import "../styles/reg.css";

const RegistrationPage = () => {
  const [page, setPage] = useState(0);

  return (
    <div className="reg">
      <div className="container">
        <div className="reg__title">Регистрация</div>
        <div className="reg__content">
          {page === 0 ? <RegUser /> : <RegAddress />}
          <div className="reg__btns">
            <Button onClick={() => setPage(0)}>Назад</Button>
            <Button onClick={() => setPage(1)}>Вперед</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
