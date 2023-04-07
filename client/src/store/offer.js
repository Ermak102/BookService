import { makeAutoObservable } from "mobx";
import OfferService from "../services/Trade/OfferService";

class OfferStore {
  offer = null;
  errors = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setOffer(offer) {
    this.offer = offer;
  }

  setErrors(error) {
    this.errors = error;
  }

  setLoading(loading) {
    this.isLoading = loading;
  }

  async createOffer(offer, idBook, idUser) {
    this.setLoading(true);
    try {
      const response = await OfferService.createOffer(offer, idBook, idUser);
      console.log(response);
      this.setOffer(response.data);
      this.setErrors(null);
    } catch (e) {
      console.log(e);
      this.setErrors(e.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}

export default new OfferStore();
