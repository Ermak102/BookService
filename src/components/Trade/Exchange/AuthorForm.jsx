import React from "react";
import RegInput from "../../Reg/RegInput";
import "../../../styles/trade-author.css";

const AuthorForm = ({ author }) => {
  return (
    <div className="trade__book">
      <div className="author__form flex-line">
        <div className="book__author--surname">
          <RegInput
            field={author.surname}
            defaultMessage="Автор *"
            placeholder="Фамилия"
            onChange={(e) => author.surname.onChange(e)}
          />
        </div>
        <div className="book__author--name">
          <RegInput
            field={author.name}
            defaultMessage="Необязательное поле"
            placeholder="Имя"
            onChange={(e) => author.name.onChange(e)}
          />
        </div>
      </div>
      <RegInput
        field={author.bookName}
        defaultMessage="Название книги *"
        placeholder="Название книги"
        onChange={(e) => author.bookName.onChange(e)}
      />
      <div className="book__parameters flex-line">
        <div className="book__parameters--isbn">
          <RegInput
            field={author.isbn}
            defaultMessage="ISBN"
            placeholder="878-5-93673-265-2"
            onChange={(e) => author.isbn.onChange(e)}
          />
        </div>
        <div className="book__parameters--year">
          <RegInput
            field={author.yearPublication}
            defaultMessage="Год издания *"
            placeholder="2012"
            onChange={(e) => author.yearPublication.onChange(e)}
          />
        </div>
      </div>
    </div>
  );
};

export default AuthorForm;
