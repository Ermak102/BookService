import axios from "axios";
import authApi, { API_URL } from "./index";

export default class AuthService {
  static async login(email, password) {
    return axios.post(API_URL + "/login", { email: email, password: password });
  }

  static async registrationUser(user) {
    return axios.post(API_URL + "/reg/", user);
  }

  static async registrationAddress(address) {
    return authApi.post(API_URL + "/address/create", { address });
  }

  static async confirmation(token) {
    return authApi.post(`/confirm?token=${token}`);
  }

  static async logout() {
    return authApi.post("/logout");
  }
}
