import React from "react";
import AuthorForm from "../components/MyTrade/AuthorForm";
import Category from "../components/MyTrade/Category";
import {
  bookNameField,
  isbnField,
  nameField,
  publicationYearField,
  surnameField,
} from "../components/MyTrade/Types/book";
import RegInput from "../components/Reg/RegInput";
import { useInput } from "../hooks/useInput";
import "../styles/trade.css";

const TradePage = () => {
  const author = {
    surname: useInput("", surnameField),
    name: useInput("", nameField),
    bookName: useInput("", bookNameField),
    isbn: useInput("", isbnField),
    yearPublication: useInput("", publicationYearField),
  };

  return (
    <div className="trade">
      <div className="container">
        <div className="trade__title">Бланк Обмена</div>
        <nav className="trade__navigation">
          <div className="trade__navigation--item">Хочу обменять</div>
          <div className="trade__navigation--item center">Хочу получить</div>
          <div className="trade__navigation--item">Адрес доставки</div>
        </nav>
        <div className="trade__item__content">
          <div className="trade__change">
            <div className="trade__change__wrapper">
              <AuthorForm author={author} />
              <Category />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TradePage;
