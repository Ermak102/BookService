import authApi, { API_URL } from "..";

export default class BookService {
  static async createBook(bookName, authorId) {
    const newBook = { bookName: bookName, author: { idAuthor: authorId } };
    return authApi.post(API_URL + "bookliterature", newBook);
  }

  static async getBook(id) {
    return authApi.get(API_URL + `bookliterature?id=${id}`);
  }
}
