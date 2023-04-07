import React, { useState } from "react";
import Login from "../../Login";
import Modal from "../Modal/Modal";
import Link from "./Link";

const RegistrationLinks = () => {
  const [modal, setModal] = useState(false);

  return (
    <div className="menu__link-reg">
      <Link path={"/reg"} activeStyle="link-active" defaultStyle={"link"}>
        Регистрация
      </Link>
      <div className="menu__login" onClick={() => setModal(!modal)}>
        <span className="menu__login__title">Авторизация</span>
        <Modal visible={modal} setVisible={setModal}>
          <Login setVisible={setModal} />
        </Modal>
      </div>
    </div>
  );
};

export default RegistrationLinks;
