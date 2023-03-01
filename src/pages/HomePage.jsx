import React from "react";
import Button from "../components/UI/Button/Button";
import "../styles/home.css";

const HomePage = () => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__wrapper">
          <div className="main__title">
            Обмен книгами (буккроссер) становится всё более популярен. Это даёт
            шанс бумажным книгам продлить свою жизнь, помогает владельцам книг
            делиться хорошими историями и получать новые впечатления
          </div>
          <div className="bookcrosser">
            Все буккроссеры любят свои книги и любят их читать. Они щедрые,
            новаторские, дружелюбные, добросердечные, веселые и образованные
            люди
          </div>
          <div className="book__trade__info">
            Наш сайт предлагает совершить не просто обмен, а добавить к этому
            увлекательному процессу элемент сюрприза. Подбор книг для обмена
            будет выполнен по пожеланиям участников, но только при получении
            книги станет известно, какая именно книга будет радовать своего
            владельца.
            <p className="trade__interesting">
              Интересно? Тогда начинайте обмен и приглашайте своих друзей
              поучаствовать!
            </p>
            <div className="trade__button">
              <Button>Совершить обмен!</Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
