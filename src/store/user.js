import { makeAutoObservable } from "mobx";
import UserService from "../services/User/UserService";

class UserStore {
  user = {};
  errors = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setUser(user) {
    this.user = user;
  }

  setErrors(error) {
    this.errors = error;
  }

  setLoading(loading) {
    this.isLoading = loading;
  }

  async getUser() {
    this.setLoading(true);
    try {
      const response = await UserService.getUser();
      this.setUser(response.data);
    } catch (e) {
      console.log(e);
      this.setErrors(e.message);
    } finally {
      this.setLoading(false);
    }
  }
}

export default new UserStore();
