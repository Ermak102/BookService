import React, { useEffect, useState } from "react";
import "../styles/reg.css";
import RegUser from "../components/Reg/RegUser";
import Button from "../components/UI/Button/Button";
import { useInput } from "../hooks/useInput";
import { useValidForm } from "../hooks/useValidForm";
import {
  emailField,
  nameField,
  nikNameField,
  passwordField,
  patronymicField,
  surnameField,
} from "../components/Reg/User/RegUserFields";
import {
  apartmentNumberField,
  buildingNumberField,
  cityField,
  houseNumberField,
  postcodeField,
  streetField,
} from "../components/Reg/Address/RegAddressFields";

const RegistrationPage = () => {
  const [checked, setChecked] = useState(false);
  const [validForm, setValidForm] = useState(true);

  const user = {
    surname: useInput("", surnameField),
    name: useInput("", nameField),
    patronymic: useInput("", patronymicField),
    email: useInput("", emailField),
    nikName: useInput("", nikNameField),
    password: useInput("", passwordField),
  };

  const address = {
    postcode: useInput("", postcodeField),
    city: useInput("", cityField),
    street: useInput("", streetField),
    houseNumber: useInput("", houseNumberField),
    buildingNumber: useInput("", buildingNumberField),
    apartmentNumber: useInput("", apartmentNumberField),
  };

  const isValidUser = useValidForm(user);
  const isValidAddress = useValidForm(address);

  useEffect(() => {
    setValidForm(!isValidAddress || !isValidUser || !checked);
  }, [isValidUser, isValidAddress, checked]);

  const registration = () => {
    console.log("User", user);
    console.log("Address", address);
  };

  return (
    <div className="reg">
      <div className="container">
        <div className="reg__content">
          <RegUser user={user} address={address} />
          <div className="reg__confirmation">
            <input
              type="checkbox"
              checked={checked}
              onChange={() => setChecked(!checked)}
            />
            <div className="confirmation__title">
              Нажимая эту кнопку, вы подтверждаете... и даёте согласие
            </div>
          </div>
          <div className="reg__btn">
            <Button onClick={() => registration()} disabled={validForm}>
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
