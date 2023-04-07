import React, { useContext, useState } from "react";
import Link from "./Link";
import "../../../styles/navbar.css";
import { observer } from "mobx-react-lite";
import { Context } from "../../..";
import RegistrationLinks from "./RegistrationLinks";
import userStore from "../../../store/user";

const Navbar = observer(() => {
  const { authStore } = useContext(Context);

  return (
    <header className="header">
      <nav className="menu">
        <div className="container">
          <div className="menu__wrapper">
            <div className="menu__logo">
              <Link path={"/"}>
                <div className="image__wrapper">
                  <img
                    className="logo__img"
                    src="./img/header/logo.png"
                    alt="logo"
                  />
                </div>
                <div className="logo">Сервис по обмену книг</div>
              </Link>
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
                path={"/myTrade"}
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

            {authStore.isAuth ? (
              <Link
                path={"/myTrade"}
                activeStyle="link-active"
                defaultStyle={"link"}
              >
                <div className="user__link">
                  <div className="link__img">
                    <img
                      src={
                        userStore.user?.img
                          ? userStore.user.img
                          : "./img/user/defaultimg.png"
                      }
                    />
                  </div>
                  <div className="user__name">{userStore?.user?.firstname}</div>
                </div>
              </Link>
            ) : (
              <RegistrationLinks />
            )}
          </div>
        </div>
      </nav>
    </header>
  );
});

export default Navbar;
