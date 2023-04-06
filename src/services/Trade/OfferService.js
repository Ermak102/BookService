import authApi, { API_URL } from "..";

const idStatus = "92384cd7-9c24-4f45-85b2-e558fe3e10ff";

export default class OfferService {
  static async createOffer(offerlist, idBook, userId) {
    const newOffer = {
      ...offerlist,
      bookLiteratures: [{ idBookLiterature: idBook }],
      user: { id: userId },
      status: { idStatus: idStatus },
    };
    return authApi.post(API_URL + "offerlist", newOffer);
  }
}
