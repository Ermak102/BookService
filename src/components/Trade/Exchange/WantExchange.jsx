import React, { useEffect, useState } from "react";
import AuthorForm from "./AuthorForm";
import Category from "../Category";
import { useValidForm } from "../../../hooks/useValidForm";

const Exchange = ({ author, setValid }) => {
  const [isValidCategory, setValidCategory] = useState(false);
  const isValidAuthor = useValidForm(author);

  useEffect(() => {
    setValid(isValidAuthor && isValidCategory);
  }, [isValidAuthor, isValidCategory]);

  return (
    <div className="exchange">
      <AuthorForm author={author} />
      <Category setValid={setValidCategory} />
    </div>
  );
};

export default Exchange;
