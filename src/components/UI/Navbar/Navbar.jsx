import React, { useState } from "react";
import Link from "./Link";
import "../../../styles/navbar.css";
import Modal from "../Modal/Modal";
import Login from "../../Login";

const Navbar = () => {
  const [modal, setModal] = useState(false);

  return (
    <header className="header">
      <nav className="menu">
        <div className="container">
          <div className="menu__wrapper">
            <div className="menu__logo">
              <div className="image__wrapper">
                <img
                  className="logo__img"
                  src="./img/header/logo.png"
                  alt="logo"
                />
              </div>
              <div className="logo">Сервис по обмену книг</div>
            </div>
            <div className="menu__links">
              <Link path={"/"} activeStyle="link-active" defaultStyle={"link"}>
                Главная
              </Link>
              <Link
                path={"/trade"}
                activeStyle="link-active"
                defaultStyle={"link"}
              >
                Начать обмен
              </Link>
              <Link
                path={"/my-trade"}
                activeStyle="link-active"
                defaultStyle={"link"}
              >
                Мои обмены
              </Link>
              <Link
                path={"/feedback"}
                activeStyle="link-active"
                defaultStyle={"link"}
              >
                Задать вопрос
              </Link>
            </div>
            <div className="menu__link-reg">
              <Link
                path={"/reg"}
                activeStyle="link-active"
                defaultStyle={"link"}
              >
                Регистрация
              </Link>
              <div className="menu__login" onClick={() => setModal(!modal)}>
                <span className="menu__login__title">Авторизация</span>
                <Modal visible={modal} setVisible={setModal}>
                  <Login />
                </Modal>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
