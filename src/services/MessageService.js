import authApi, { API_URL } from ".";

const idStatus = "1ee14d77-3a54-4ca6-89c4-b414e8567dc9";

const typeOfMessage = 1;

export default class MessageService {
  static async send(message, userId) {
    console.log(message, userId, idStatus, typeOfMessage);
    return authApi.post(API_URL + "UserMessage/", {
      typeOfMessage: typeOfMessage,
      user: { id: userId },
      status: { idStatus: idStatus },
      textMessage: message,
    });
  }
}
