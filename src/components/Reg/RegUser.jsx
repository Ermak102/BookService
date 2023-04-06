import React from "react";
import RegAddressFrom from "./Address/RegAddressForm";
import RegUserForm from "./User/RegUserForm";
import UserUploadImg from "./User/UserUploadImg";

const RegUser = ({ user, address }) => {
  return (
    <div className="reg__user">
      <div className="user">
        <div className="reg__title">Регистрация</div>
        <UserUploadImg />
        <RegUserForm user={user} />
      </div>

      <div className="address">
        <div className="reg__title">Адресные данные</div>
        <RegAddressFrom address={address} />
      </div>
    </div>
  );
};

export default RegUser;
