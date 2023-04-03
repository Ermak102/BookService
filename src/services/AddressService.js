import axios from "axios";
import { API_URL } from "./index";

const URL = API_URL + "/address";

export default class AddressService {
  static async createAddress(userId, address) {
    return axios(URL + "/create", { ...address, userId: userId });
  }
}
