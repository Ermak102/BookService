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
        placeholder="Индекс"
        type="text"
        value={address.postcode}
        onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
      />
      <InputLabel
        placeholder="Город"
        type="text"
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
      />
      <InputLabel
        placeholder="Улица"
        type="text"
        value={address.street}
        onChange={(e) => setAddress({ ...address, street: e.target.value })}
      />
      <InputLabel
        placeholder="Номер дома"
        type="text"
        value={address.houseNumber}
        onChange={(e) =>
          setAddress({ ...address, houseNumber: e.target.value })
        }
      />
      <InputLabel
        placeholder="Номер строения"
        type="text"
        value={address.buildingNumber}
        onChange={(e) =>
          setAddress({ ...address, buildingNumber: e.target.value })
        }
      />
      <InputLabel
        placeholder="Номер квартиры"
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
