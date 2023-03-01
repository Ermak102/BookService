import React from "react";
import RegAddress from "../components/Reg/RegAddress";
import RegUser from "../components/Reg/RegUser";
import "../styles/reg.css";

const RegistrationPage = () => {
  return (
    <div className="reg">
      <div className="container">
        <div className="reg__title">Регистрация</div>
        <div className="reg__content">
          <RegUser />
          <RegAddress />
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
