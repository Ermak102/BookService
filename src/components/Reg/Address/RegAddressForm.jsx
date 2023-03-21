import React, { useState } from "react";
import { getCity, getStreet } from "../../../api/addressApi";
import RegInput from "../RegInput";

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
    if (!cityHints.length) {
      return;
    }

    const response = await getStreet(query, cityHints[0].id);
    const data = response.data.result;
    data.shift();
    setStreetHints(data);
  };

  return (
    <div className="reg__user__address">
      <div className="user__fields__wrapper">
        <div className="user__field-index">
          <RegInput
            field={address.postcode}
            placeholder="Индекс"
            onChange={(e) => address.postcode.onChange(e)}
          />
        </div>
        <div className="user__field-city">
          <RegInput
            field={address.city}
            placeholder="Город"
            onChange={(e) => changeCity(e)}
            listName="city"
          />
        </div>
        <div className="user__field-street">
          <RegInput
            field={address.street}
            placeholder="Улица"
            onChange={(e) => changeStreet(e)}
            listName="street"
          />
        </div>
      </div>

      <div className="user__fields__wrapper">
        <div className="user__field-house">
          <RegInput
            field={address.houseNumber}
            placeholder="Номер дома"
            onChange={(e) => address.houseNumber.onChange(e)}
          />
        </div>

        <div className="user__field-building">
          <RegInput
            field={address.buildingNumber}
            defaultMessage=""
            placeholder="Номер строения"
            onChange={(e) => address.buildingNumber.onChange(e)}
          />
        </div>

        <div className="user__field-apartment">
          <RegInput
            field={address.apartmentNumber}
            placeholder="Номер квартиры"
            onChange={(e) => address.apartmentNumber.onChange(e)}
          />
        </div>
      </div>

      <datalist id="city">
        {cityHints.map((hint) => (
          <option key={hint.id} value={hint.name} />
        ))}
      </datalist>

      <datalist id="street">
        {streetHints.map((hint) => (
          <option key={hint.id} value={hint.name} />
        ))}
      </datalist>
    </div>
  );
};

export default RegAddressForm;
