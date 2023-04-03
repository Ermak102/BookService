import { makeAutoObservable } from "mobx";
import MessageService from "../services/MessageService";

class MessageStore {
  isLoading = null;
  errors = null;

  constructor() {
    makeAutoObservable(this);
  }

  setLoading(loading) {
    this.loading = loading;
  }

  setErrors(error) {
    this.errors = error;
  }

  async sendMessage(message, userId) {
    this.setLoading(true);
    try {
      const response = MessageService.send(message, userId);
      console.log(response);
    } catch (e) {
      this.setErrors(e.response.data.message);
    } finally {
      this.setLoading(false);
    }
  }
}

export default new MessageStore();
