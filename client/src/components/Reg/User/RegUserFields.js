export const surnameField = {
  isEmpty: true,
  maxLength: 50,
  cyrillic: true,
};

export const nameField = {
  isEmpty: true,
  maxLength: 25,
  cyrillic: true,
};

export const patronymicField = {
  maxLength: 25,
  cyrillic: true,
};

export const emailField = {
  isEmpty: true,
  email: true,
};

export const nikNameField = {
  isEmpty: true,
  specialSymbol: true,
};

export const passwordField = {
  isEmpty: true,
  minLength: 8,
  specialSymbol: true,
  includeNumber: true,
  password: true,
};
