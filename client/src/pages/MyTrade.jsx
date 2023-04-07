import React, { useContext } from "react";
import { Context } from "..";
import Button from "../components/UI/Button/Button";
import userStore from "../store/user";

const MyTrade = () => {
  const { authStore } = useContext(Context);

  const logout = async (e) => {
    e.preventDefault();

    await authStore.logout();
  };

  console.log(userStore.user);

  return (
    <div>
      <div className="title">MyTrade</div>
      <div className="logout">
        <Button onClick={(e) => logout(e)}>Выйти</Button>
      </div>
    </div>
  );
};

export default MyTrade;
