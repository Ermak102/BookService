import axios from "axios";
import authApi, { API_URL } from "../index";

export default class AuthService {
  static async login(email, password) {
    return axios.post(API_URL + "auth/login", {
      email: email,
      password: password,
    });
  }

  static async registrationUser(user) {
    return axios.post(API_URL + "auth/reg/", user);
  }

  static async confirmation(token) {
    return authApi.post(`auth/confirm?token=${token}`);
  }

  static async logout() {
    return authApi.post("auth/logout");
  }
}
