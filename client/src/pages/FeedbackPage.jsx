import React, { useState } from "react";
import "../styles/feedback.css";
import Button from "../components/UI/Button/Button";
import { observer } from "mobx-react-lite";
import messageStore from "../store/message";
import userStore from "../store/user";
import { useNavigate } from "react-router-dom";

const FeedbackPage = observer(() => {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const sendMessage = async (e) => {
    e.preventDefault();

    const userId = userStore.user.id;

    if (userId !== null) {
      await messageStore.sendMessage(message, userId);
    }

    if (messageStore.errors === null) {
      navigate("/");
    }
  };

  return (
    <div className="feedback">
      <div className="feedback__wrapper">
        <form className="feedback__form">
          <div className="feedback__title">Возникли вопросы?</div>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="feedback__area"
          ></textarea>
          <div>{messageStore.errors ? messageStore.errors : ""}</div>
          <Button onClick={(e) => sendMessage(e)}>Отправить</Button>
        </form>
      </div>
    </div>
  );
});

export default FeedbackPage;
