import AuthorStore from "../../store/author";
import BookStore from "../../store/book";
import OfferStore from "../../store/offer";
import userStore from "../../store/user";

export default class TradeService {
  static async createTrade(authorData, bookName, offerData) {
    await AuthorStore.createAuthor(authorData);
    const author = AuthorStore.author;

    await BookStore.createBook(bookName, author.idAuthor);
    const book = BookStore.book;

    const userId = userStore.user.id;

    await OfferStore.createOffer(offerData, book.idBookLiterature, userId);
  }
}
