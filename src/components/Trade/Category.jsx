import React, { useEffect } from "react";
import { useListChecked } from "../../hooks/useListChecked";
import "../../styles/category.css";
import Accordion from "../UI/Accordion/Accordion";
import {
  condition,
  cover,
  genre,
  language,
  laureate,
  science,
  screening,
} from "./Types/category";

const Category = ({ setValid }) => {
  const accordionContent = [
    { title: "Жанр", list: useListChecked(genre) },
    { title: "Область наук", list: useListChecked(science) },
    { title: "Состояние", list: useListChecked(condition) },
    { title: "Обложка", list: useListChecked(cover) },
    { title: "Лауреат", list: useListChecked(laureate) },
    { title: "Экранизация", list: useListChecked(screening) },
    { title: "Язык издания", list: useListChecked(language) },
  ];

  useEffect(() => {
    const countCheckGenre = accordionContent
      .filter((item) => item.title === "Жанр")
      .map((item) =>
        item.list.filter((check) => check.checked.isChecked === true)
      );

    setValid(countCheckGenre[0].length > 0);
  }, [accordionContent]);

  return (
    <div className="book__category">
      <div className="book__title">Категории</div>
      <div className="book__category__wrapper">
        <Accordion type={"list"} content={accordionContent} />
      </div>
    </div>
  );
};

export default Category;
