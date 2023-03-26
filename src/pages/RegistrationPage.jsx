import React, { useEffect, useState } from "react";
import "../styles/reg.css";
import RegUser from "../components/Reg/RegUser";
import Button from "../components/UI/Button/Button";
import { useInput } from "../hooks/useInput";
import { useValidForm } from "../hooks/useValidForm";
import { useNavigate } from "react-router-dom";
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
import { useContext } from "react";
import { Context } from "..";
import Error from "../components/UI/Error/Error";
import { observer } from "mobx-react-lite";
import Loader from "../components/UI/Loader/Loader";

const RegistrationPage = observer(() => {
  const [checked, setChecked] = useState(false);
  const [validForm, setValidForm] = useState(true);

  const navigate = useNavigate();

  const { authStore } = useContext(Context);

  useEffect(() => {
    authStore.setErrors(null);
  }, []);

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

  const registration = async () => {
    const newUser = {
      firstname: user.name.value,
      lastname: user.surname.value,
      username: user.nikName.value,
      email: user.email.value,
      password: user.password.value,
    };

    await authStore.registration(newUser);

    if (authStore.errors === null) {
      navigate("/confirm");
    }
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
          <Error message={authStore.errors} />
          {authStore.isLoading === true ? (
            <Loader backgroundInvisible={false} />
          ) : (
            ""
          )}

          <div className="reg__btn">
            <Button
              onClick={() => registration()}
              disabled={validForm || authStore.isLoading}
            >
              Зарегистрироваться
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
});

export default RegistrationPage;
