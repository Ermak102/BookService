import { makeAutoObservable } from "mobx";
import AuthService from "../services/Auth/AuthService";

export default class AuthStore {
  isAuth = false;
  errors = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setAuth(isAuth) {
    this.isAuth = isAuth;
  }

  setErrors(errors) {
    this.errors = errors;
  }

  setLoading(isLoading) {
    this.isLoading = isLoading;
  }

  async login(email, password) {
    this.setLoading(true);
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("userToken", response.data.value);
      console.log(response);
      this.setAuth(true);
      this.setErrors(null);
    } catch (e) {
      console.log(e);
      this.setErrors("Вы не зарегистрированы!");
    } finally {
      this.setLoading(false);
    }
  }

  async registration(user) {
    this.setLoading(true);
    try {
      const response = await AuthService.registrationUser(user);
      localStorage.setItem("userToken", response.data.value);
      console.log(response);
      this.setErrors(null);
    } catch (e) {
      console.log(e);
      this.setErrors(e.response.data.message);
    } finally {
      this.setLoading(false);
    }
  }

  async confirmation(token) {
    try {
      const response = await AuthService.confirmation(token);
      console.log(response);
      this.setErrors(null);
      this.setAuth(true);
    } catch (e) {
      this.setErrors(e.response.data.message);
    }
  }

  async logout() {
    try {
      const response = await AuthService.logout();
      localStorage.removeItem("userToken");
      console.log(response);
      this.setAuth(false);
    } catch (e) {
      this.setErrors(e.response.data.message);
    }
  }
}
