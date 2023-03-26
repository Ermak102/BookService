import axios from "axios";
import { BASE_API_URL } from ".";

const URL = BASE_API_URL + "/address";

export default class AddressService {
  static async createAddress(userId, address) {
    return axios(URL + "/create", { ...address, userId: userId });
  }
}
