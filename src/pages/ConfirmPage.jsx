import { observer } from "mobx-react-lite";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Context } from "..";
import Button from "../components/UI/Button/Button";
import Error from "../components/UI/Error/Error";
import "../styles/confirmation.css";

const ConfirmPage = observer(() => {
  const { authStore } = useContext(Context);

  const navigate = useNavigate();
  const [confirmation, setConfirmation] = useState("");

  const confirm = async (e) => {
    e.preventDefault();

    await authStore.confirmation(confirmation);

    if (authStore.errors === null) {
      navigate("/myTrade");
    }
  };

  return (
    <div className="confirmation">
      <div className="confirmation__name">Подтвердите почту</div>
      <div className="confirmation__wrapper">
        <div className="confirmation__description">
          Введите верификационный код, отправленный на Вашу почту
          <span>{authStore.user.email}</span>
        </div>
        <form className="confirmation__form">
          <input
            className="confirmation__input"
            placeholder="d1b7ba86-0c65-4632-9095-24faf4bcc6f4"
            value={confirmation}
            onChange={(e) => setConfirmation(e.target.value)}
          />

          {<Error message={authStore.errors} />}

          <div className="confirmation__btn">
            <Button onClick={(e) => confirm(e)}>Подтвердить</Button>
          </div>
        </form>
      </div>
    </div>
  );
});

export default ConfirmPage;
