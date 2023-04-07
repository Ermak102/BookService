import { makeAutoObservable } from "mobx";
import AuthorService from "../services/Trade/AuthorService";

class AuthorStore {
  author = null;
  errors = null;
  isLoading = null;

  constructor() {
    makeAutoObservable(this);
  }

  setAuthor(author) {
    this.author = author;
  }

  setErrors(error) {
    this.errors = error;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  async createAuthor(author) {
    this.setLoading(true);
    try {
      const response = await AuthorService.createAuthor(author);
      console.log(response);
      this.setAuthor(response.data);
      this.setErrors(null);
    } catch (e) {
      console.log(e);
      this.setErrors(e.data.message);
    } finally {
      this.setLoading(false);
    }
  }

  async getAuthor(id) {
    this.setLoading(true);
    try {
      const response = await AuthorStore.getAuthor(id);
      this.setAuthor(response.data);
    } catch (e) {
      this.setErrors(e.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}

export default new AuthorStore();
