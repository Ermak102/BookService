import { makeAutoObservable } from "mobx";
import AddressService from "../services/AddressService";

class AddressStore {
  address = null;
  isLoading = false;
  errors = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAddress(address) {
    this.address = address;
  }

  setLoading(loading) {
    this.isLoading = loading;
  }

  setErrors(error) {
    this.errors = error;
  }

  async createAddress(userId, address) {
    this.setLoading(true);
    try {
      const response = await AddressService.createAddress(userId, address);
      console.log(response);
      this.setAddress(response.data);
      this.setErrors(null);
    } catch (e) {
      console.log(e);
      this.setErrors(e.message);
    } finally {
      this.setLoading(false);
    }
  }
}

export default new AddressStore();
