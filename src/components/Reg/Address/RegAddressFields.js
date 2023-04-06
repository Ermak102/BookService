export const postcodeField = {
  isEmpty: true,
  minLength: 6,
  maxLength: 6,
  onlyNumber: true,
};

export const cityField = {
  isEmpty: true,
  maxLength: 15,
  cyrillic: true,
};

export const streetField = {
  isEmpty: true,
  maxLength: 25,
  street: true,
};

export const houseNumberField = {
  isEmpty: true,
  houseNumber: true,
  maxLength: 5,
};

export const buildingNumberField = {
  buildingNumber: true,
  maxLength: 3,
};

export const apartmentNumberField = {
  onlyNumber: true,
  maxLength: 3,
};
