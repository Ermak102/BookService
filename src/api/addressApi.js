import axios from "axios";

const API = "https://kladr-api.ru/api.php";

const LIMIT = 4;

export const getCity = async (query) => {
  return await axios.get(API, {
    params: {
      query: query,
      contentType: "city",
      limit: LIMIT,
      typeCode: 1,
    },
  });
};

export const getStreet = async (query, cityId) => {
  return await axios.get(API, {
    params: {
      query: query,
      contentType: "street",
      cityId: cityId,
      limit: LIMIT,
      typeCode: 1,
    },
  });
};
