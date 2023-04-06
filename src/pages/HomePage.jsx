import React from "react";
import "../styles/home.css";
import Link from "../components/UI/Navbar/Link";

const HomePage = () => {
  return (
    <main className="main">
      <div className="container__horizontal">
        <section className="main__section">
          <div className="main__background page__first"></div>

          <div className="main__wrapper">
            <div className="main__content">
              <div className="main__title">Подарите книгам вторую жизнь</div>
              <div className="main__description">
                Обмен книгами (буккроссер) становится все более популярен. Это
                дает шанс бумажным книгам{" "}
                <span className="bold">продлить свою жизнь</span>, помогает
                владельцам книг делиться
                <span className="bold"> хорошими историями</span> и получить{" "}
                <span className="bold">новые впечатления.</span>
              </div>
            </div>
          </div>
        </section>
        <section className="main__section section-second">
          <div className="main__background page__second"></div>

          <div className="main__wrapper">
            <div className="main__model-book">
              <model-viewer
                alt="Book"
                src="./model/book.glb"
                ar
                shadow-intensity="1"
                camera-controls
                touch-action="pan-y"
                class="book"
              ></model-viewer>
            </div>

            <div className="main__description">
              Наш сайт предлагает не проcто обмен, а добавить к этому
              увлекательному процессу элемент сюрприза. Подбор книг для обмена
              будет выполнен по желанию участников, но только при получении
              книги станет известно, какая именно книга будеь радовать своего
              владельца.
            </div>
            <div className="main__interest">
              Интересно? Тогда начинайте обмен и приглашайте своих друзей
              поучавствовать.
            </div>
            <div className="main__go__trade">
              <Link
                path={"/trade"}
                activeStyle="link-active"
                defaultStyle={"link"}
              >
                Начать обмен
              </Link>
            </div>
          </div>
          <section className="main__ability">
            <div className="container">
              <div className="main__ability__wrapper">
                <div className="main__ability__title">Возможности</div>
                <div className="main__abilities">
                  <div className="ability">
                    <div className="ability__wrapper">
                      <div className="ability__img">
                        <img src="./img/main/love.png" alt="love" />
                      </div>
                    </div>
                    <div className="ability__content">
                      <div className="ability__title">Единомышленники</div>
                      <div className="ability__body">
                        Все буккроссеры любят свои книги и любя их читать. Они
                        щедрые, новаторские, дружелюбные, добросердечные,
                        веселые и образованные люди.
                      </div>
                    </div>
                  </div>
                  <div className="ability">
                    <div className="ability__wrapper">
                      <div className="ability__img">
                        <img src="./img/main/change.png" alt="love" />
                      </div>
                    </div>
                    <div className="ability__content">
                      <div className="ability__title">Быстрый обмен</div>
                      <div className="ability__body">
                        Новые впечатления не заставят себя долго ждать,
                        используя нащ быстрый обмен
                      </div>
                    </div>
                  </div>
                  <div className="ability">
                    <div className="ability__wrapper">
                      <div className="ability__img">
                        <img src="./img/main/books.png" alt="love" />
                      </div>
                    </div>
                    <div className="ability__content">
                      <div className="ability__title">Большой выбор</div>
                      <div className="ability__body">
                        Здесь вы встретите огромное количество книг, начиная от
                        художественной литературы и заканчивая научной
                        фантастикой.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </div>
    </main>
  );
};

export default HomePage;
