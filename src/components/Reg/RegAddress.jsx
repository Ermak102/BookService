import React, { useState } from "react";
import Input from "../UI/Input/Input";

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
      <Input
        type="text"
        placeholder="Индекс"
        value={address.postcode}
        onChange={(e) => setAddress({ ...address, postcode: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Город"
        value={address.city}
        onChange={(e) => setAddress({ ...address, city: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Улица"
        value={address.street}
        onChange={(e) => setAddress({ ...address, street: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Номер дома"
        value={address.houseNumber}
        onChange={(e) =>
          setAddress({ ...address, houseNumber: e.target.value })
        }
      />
      <Input
        type="text"
        placeholder="Номер строения"
        value={address.buildingNumber}
        onChange={(e) =>
          setAddress({ ...address, buildingNumber: e.target.value })
        }
      />
      <Input
        type="text"
        placeholder="Номер квартиры"
        value={address.apartmentNumber}
        onChange={(e) =>
          setAddress({ ...address, apartmentNumber: e.target.value })
        }
      />
    </div>
  );
};

export default RegAddress;
