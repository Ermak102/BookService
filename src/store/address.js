import { makeAutoObservable } from "mobx";
import AddressService from "../services/AddressService";

export default class AddressStore {
  address = {};
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
    this.setLoading(false);

    try {
      const response = await AddressService.createAddress(userId, address);
      console.log(response);
      this.setAddress({ ...address, id: response.data.userId });
      this.setErrors(null);
    } catch (e) {
      this.setErrors(e.message);
    }
  }
}
