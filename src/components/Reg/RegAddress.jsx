import React, { useState } from "react";
import InputLabel from "../UI/Input/InputLabel";

const RegAddress = () => {
  const [address, setAddress] = useState({
    postcode: "",
    city: "",
    street: "",
    houseNumber: "",
    buildingNumber: "",
    apartmentNumber: "",
  });

  return (
    <div className="reg__user__address">
      <InputLabel
        name="Индекс"
        type="text"
        value={address.postcode}
        onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
      />
      <InputLabel
        name="Город"
        type="text"
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
      />
      <InputLabel
        name="Улица"
        type="text"
        value={address.street}
        onChange={(e) => setAddress({ ...address, street: e.target.value })}
      />
      <InputLabel
        name="Номер дома"
        type="text"
        value={address.houseNumber}
        onChange={(e) =>
          setAddress({ ...address, houseNumber: e.target.value })
        }
      />
      <InputLabel
        name="Номер строения"
        type="text"
        value={address.buildingNumber}
        onChange={(e) =>
          setAddress({ ...address, buildingNumber: e.target.value })
        }
      />
      <InputLabel
        name="Номер квартиры"
        type="text"
        value={address.apartmentNumber}
        onChange={(e) =>
          setAddress({ ...address, apartmentNumber: e.target.value })
        }
      />
    </div>
  );
};

export default RegAddress;
