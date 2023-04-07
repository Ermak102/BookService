import React, { useState } from "react";
import Modal from "./UI/Modal/Modal";
import BorderButton from "./UI/Button/BorderButton";
import "../styles/unauthorized.css";
import { useNavigate } from "react-router-dom";
import Login from "./Login";

const Unauthorized = ({ visible, setVisible }) => {
  const [visibleLogin, setVisibleLogin] = useState(false);
  const navigate = useNavigate();

  const goLogin = () => {
    setVisible(false);
    setVisibleLogin(true);
  };

  return (
    <div className="unauthorized">
      <Modal visible={visible} setVisible={setVisible}>
        <div className="login">
          <div className="login__wrapper">
            <div className="login__title">Вы не авторизованы</div>
            <div className="unauthorized__btn">
              <BorderButton onClick={() => navigate("/reg")}>
                Зарегистрироваться
              </BorderButton>
              <BorderButton onClick={() => goLogin()}>
                Авторизоваться
              </BorderButton>
            </div>
          </div>
        </div>
      </Modal>
      <Modal visible={visibleLogin} setVisible={setVisibleLogin}>
        <Login />
      </Modal>
    </div>
  );
};

export default Unauthorized;
