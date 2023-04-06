import authApi, { API_URL } from "./index";

export default class AddressService {
  static async createAddress(userId, address) {
    const newAddress = {
      ...address,
      user: { id: userId },
    };
    return authApi.post(API_URL + "address", newAddress);
  }
}
