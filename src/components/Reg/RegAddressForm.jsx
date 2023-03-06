import React, { useState } from "react";
import { getCity, getStreet } from "../../api/addressApi";
import InputLabel from "../UI/Input/InputLabel";
import Message from "./Message";

const RegAddressForm = ({ address }) => {
  const [cityHints, setCityHints] = useState([]);
  const [streetHints, setStreetHints] = useState([]);

  const changeCity = (e) => {
    address.city.onChange(e);
    fetchCityHints(e.target.value);
  };

  const fetchCityHints = async (query) => {
    const response = await getCity(query);
    const data = response.data.result;
    data.shift();
    setCityHints(data);
  };

  const changeStreet = (e) => {
    address.street.onChange(e);
    fetchStreetHints(e.target.value);
  };

  const fetchStreetHints = async (query) => {
    if (!cityHints[0].id) {
      return;
    }

    const response = await getStreet(query, cityHints[0].id);
    const data = response.data.result;
    data.shift();
    setStreetHints(data);
  };

  return (
    <div className="reg__user__address">
      <Message
        visible={address.postcode.isExit && address.postcode.errorMessage}
        message={address.postcode.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Индекс"
        value={address.postcode.value}
        onChange={(e) => address.postcode.onChange(e)}
        onBlur={(e) => address.postcode.onExitEnter(e)}
        valid={address.postcode.isExit ? address.postcode.isValid() : "default"}
        type="text"
      />

      <Message
        visible={address.city.isExit && address.city.errorMessage}
        message={address.city.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Город"
        value={address.city.value}
        onChange={(e) => changeCity(e)}
        onBlur={(e) => address.city.onExitEnter(e)}
        valid={address.city.isExit ? address.city.isValid() : "default"}
        type="text"
        list="city"
      />
      <datalist id="city">
        {cityHints.map((hint) => (
          <option key={hint.id} value={hint.name} />
        ))}
      </datalist>

      <Message
        visible={address.street.isExit && address.street.errorMessage}
        message={address.street.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Улица"
        value={address.street.value}
        onChange={(e) => changeStreet(e)}
        onBlur={(e) => address.street.onExitEnter(e)}
        valid={address.street.isExit ? address.street.isValid() : "default"}
        type="text"
        list="street"
      />
      <datalist id="street">
        {streetHints.map((hint) => (
          <option key={hint.id} value={hint.name} />
        ))}
      </datalist>

      <Message
        visible={address.houseNumber.isExit && address.houseNumber.errorMessage}
        message={address.houseNumber.errorMessage}
        defaultValue={"* обязательное поле"}
      />
      <InputLabel
        placeholder="Номер дома"
        value={address.houseNumber.value}
        onChange={(e) => address.houseNumber.onChange(e)}
        onBlur={(e) => address.houseNumber.onExitEnter(e)}
        valid={
          address.houseNumber.isExit ? address.houseNumber.isValid() : "default"
        }
        type="text"
      />

      <Message
        visible={
          address.buildingNumber.isExit && address.buildingNumber.errorMessage
        }
        message={address.buildingNumber.errorMessage}
      />
      <InputLabel
        placeholder="Номер строения"
        value={address.buildingNumber.value}
        onChange={(e) => address.buildingNumber.onChange(e)}
        onBlur={(e) => address.buildingNumber.onExitEnter(e)}
        valid={
          address.buildingNumber.isExit
            ? address.buildingNumber.isValid()
            : "default"
        }
        type="text"
      />

      <Message
        visible={
          address.apartmentNumber.isExit && address.apartmentNumber.errorMessage
        }
        message={address.apartmentNumber.errorMessage}
      />
      <InputLabel
        placeholder="Номер квартиры"
        value={address.apartmentNumber.value}
        onChange={(e) => address.apartmentNumber.onChange(e)}
        onBlur={(e) => address.apartmentNumber.onExitEnter(e)}
        valid={
          address.apartmentNumber.isExit
            ? address.apartmentNumber.isValid()
            : "default"
        }
        type="text"
      />
    </div>
  );
};

export default RegAddressForm;
