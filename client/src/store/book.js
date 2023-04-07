import { makeAutoObservable } from "mobx";
import BookService from "../services/Trade/BookService";

class BookStore {
  book = null;
  errors = null;
  isLoading = false;

  constructor() {
    makeAutoObservable(this);
  }

  setBook(book) {
    this.book = book;
  }

  setErrors(error) {
    this.errors = error;
  }

  setLoading(loading) {
    this.loading = loading;
  }

  async createBook(book, idAuthor) {
    this.setLoading(true);
    try {
      const response = await BookService.createBook(book, idAuthor);
      console.log(response);
      this.setBook(response.data);
      this.setErrors(null);
    } catch (e) {
      console.log(e);
      this.setErrors(e.data?.message);
    } finally {
      this.setLoading(false);
    }
  }

  async getBook(id) {
    this.setLoading(true);
    try {
      const response = await BookService.getBook(id);
      console.log(response);
      this.setBook(response.data);
    } catch (e) {
      console.log(e);
      this.setErrors(e.data?.message);
    } finally {
      this.setLoading(false);
    }
  }
}

export default new BookStore();
