import React, { useState } from "react";
import Button from "../UI/Button/Button";
import Input from "../UI/Input/Input";

const ActiveTrade = () => {
  const [accept, acceptSet] = useState(0);

  return (
    <div className="body__content">
      <div className="myTrade__content">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Книга 1 --- Книга 2</h2>
              <p>
                Самара --- Сызрань
                <br />
                Рейтинг -
              </p>
            </div>
          </div>
          <div className="face face2">
            <h2>Мне</h2>
          </div>
        </div>
      </div>

      <div className="myTrade__content">
        <div className="card">
          <div className="face face1">
            <div className="content">
              <h2>Книга 1 --- Книга 2</h2>
              <p>
                Самара --- Сызрань
                <br />
                Рейтинг -
              </p>

              {accept === 0 ? (
                <Button onClick={() => acceptSet(1)}>Подтвердить обмен</Button>
              ) : (
                <div className="formTrackNumber">
                  <Input placeholder="Введите трек-номер"></Input>
                  <Button onClick={() => acceptSet(1)}>Отправить</Button>
                </div>
              )}
            </div>
          </div>
          <div className="face face2">
            <h2>Я</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActiveTrade;
