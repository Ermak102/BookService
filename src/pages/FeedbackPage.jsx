import React from "react";
import "../styles/feedback.css";
import Button from "../components/UI/Button/Button";

const FeedbackPage = () => {
  return (
    <div className="feedback">
      <div className="feedback__wrapper">
        <form className="feedback__form">
          <div className="feedback__title">Возникли вопросы?</div>
          <textarea className="feedback__area"></textarea>
          <Button>Отправить</Button>
        </form>
      </div>
    </div>
  );
};

export default FeedbackPage;
