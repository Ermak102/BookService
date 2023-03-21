import React, { useState } from "react";
import InputFile from "../../UI/Input/InputFile";

const UserUploadImg = () => {
  const [userImg, setUserImg] = useState("./img/user/defaultImg.png");

  const changeUserImage = (e) => {
    if (e.target.files && e.target.files[0]) {
      setUserImg(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className="user__upload__img">
      <div className="user__img__wrapper">
        <img src={userImg} alt="Ваша иконка" className="user__img" />
      </div>
      <InputFile onChange={(e) => changeUserImage(e)} />
    </div>
  );
};

export default UserUploadImg;
