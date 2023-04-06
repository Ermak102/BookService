import userApi from "../index";

export default class UserService {
  static async getUser() {
    return await userApi.get("/me");
  }
}
