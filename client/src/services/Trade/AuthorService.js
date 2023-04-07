import authApi, { API_URL } from "..";

export default class AuthorService {
  static async createAuthor(author) {
    return authApi.post(API_URL + "author", author);
  }

  static async getAuthor(id) {
    return authApi.get(API_URL + `author?id=${id}`);
  }
}
