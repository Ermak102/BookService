import React from "react";
import WantExchange from "./Exchange/WantExchange";
import Category from "./Category";
import DeliveryAddress from "./DeliveryAddress";

const TradePages = ({ page, author, address, user, setValid }) => {
  switch (page) {
    case 1:
      return <WantExchange author={author} setValid={setValid} />;
    case 2:
      return (
        <div className="page__get">
          <Category setValid={setValid} />
        </div>
      );
    case 3:
      return (
        <DeliveryAddress address={address} user={user} setValid={setValid} />
      );
    default:
      return <WantExchange author={author} setValid={setValid} />;
  }
};

export default TradePages;
