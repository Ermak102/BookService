import React, { useEffect, useState } from "react";
import RegAddressForm from "../Reg/Address/RegAddressForm";
import RegInput from "../Reg/RegInput";
import { useValidForm } from "../../hooks/useValidForm";

const DeliveryAddress = ({ user, address, setValid }) => {
  const isValidUser = useValidForm(user);
  const isValidAddress = useValidForm(address);

  useEffect(() => {
    setValid(isValidAddress && isValidUser);
  }, [isValidUser, isValidAddress]);

  return (
    <div className="trade__delivery">
      <div className="delivery__address">
        <RegAddressForm address={address} />
      </div>
      <div className="delivery__user">
        <RegInput
          field={user.surname}
          placeholder="Фамилия"
          onChange={(e) => user.surname.onChange(e)}
        />
        <RegInput
          field={user.name}
          placeholder="Имя"
          onChange={(e) => user.name.onChange(e)}
        />
        <RegInput
          field={user.patronymic}
          placeholder="Отчество"
          onChange={(e) => user.patronymic.onChange(e)}
          defaultMessage=""
        />
      </div>
    </div>
  );
};

export default DeliveryAddress;
