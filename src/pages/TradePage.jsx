import React, { useContext, useEffect, useState } from "react";
import {
  bookNameField,
  isbnField,
  nameField,
  publicationYearField,
  surnameField,
} from "../components/Trade/Types/book";
import { useInput } from "../hooks/useInput";
import Button from "../components/UI/Button/Button";
import "../styles/trade.css";
import TradePages from "../components/Trade/TradePages";
import { Context } from "..";
import {
  apartmentNumberField,
  buildingNumberField,
  cityField,
  houseNumberField,
  postcodeField,
  streetField,
} from "../components/Reg/Address/RegAddressFields";
import { patronymicField } from "../components/Reg/User/RegUserFields";
import Unauthorized from "../components/Unauthorized";
import TradeService from "../services/Trade/TradeService";
import { useNavigate } from "react-router-dom";
import addressStore from "../store/address";

const TradePage = () => {
  const [page, setPage] = useState(1);
  const [validPage, setValidPage] = useState(false);
  const [visibleForm, setVisibleForm] = useState(false);

  const navigate = useNavigate();
  const { authStore } = useContext(Context);

  const nextPage = () => {
    setPage(page + 1);

    if (page === 3) {
      createTrade();
    }
  };

  const prevPage = () => {
    setPage(page - 1);
  };

  const createTrade = async () => {
    if (!authStore.isAuth) {
      setVisibleForm(true);
      setPage(1);
      return;
    }

    const authorData = {
      firstName: author.name.value,
      lastName: author.surname.value,
    };

    const offerData = {
      ibsn: author.isbn.value,
      yearPublishing: parseInt(author.yearPublication.value),
    };

    await TradeService.createTrade(
      authorData,
      author.bookName.value,
      offerData
    );

    navigate("/myTrade");

    setPage(1);
  };

  const getNavigationClasses = (activePage) => {
    const baseClass = "trade__navigation--item";

    if (activePage === page) return baseClass + " active";

    return baseClass;
  };

  const author = {
    surname: useInput("", surnameField),
    name: useInput("", nameField),
    bookName: useInput("", bookNameField),
    isbn: useInput("", isbnField),
    yearPublication: useInput("", publicationYearField),
  };

  const address = {
    postcode: useInput("", postcodeField),
    city: useInput("", cityField),
    street: useInput("", streetField),
    houseNumber: useInput("", houseNumberField),
    buildingNumber: useInput("", buildingNumberField),
    apartmentNumber: useInput("", apartmentNumberField),
  };

  const user = {
    surname: useInput("", surnameField),
    name: useInput("", nameField),
    patronymic: useInput("", patronymicField),
  };

  return (
    <div className="trade">
      <div className="container">
        <div className="trade__title">Бланк Обмена</div>
        <nav className="trade__navigation">
          <div className={getNavigationClasses(1)}>Хочу обменять</div>
          <div className={getNavigationClasses(2)}>Хочу получить</div>
          <div className={getNavigationClasses(3)}>Адрес доставки</div>
        </nav>
        <div className="trade__item__content">
          <div className="trade__change">
            <TradePages
              page={page}
              author={author}
              address={address}
              user={user}
              setValid={setValidPage}
            />
          </div>
        </div>
        <div className="trade__pagination">
          <div className="pagination__btns">
            <Button disabled={page === 1} onClick={() => prevPage()}>
              Назад
            </Button>
            <Button disabled={!validPage} onClick={() => nextPage()}>
              {page === 3 ? "Подтвердить данные" : "Далее"}
            </Button>
          </div>
        </div>
      </div>
      <Unauthorized visible={visibleForm} setVisible={setVisibleForm} />
    </div>
  );
};

export default TradePage;
