import { SERVER } from "../config/index.js";
import booksService from "../services/books.js";
import { SuccessResponseDTO } from "../DTO/index.js";
const serverURL = `${SERVER.PROTOCOL}://${SERVER.HOST}:${SERVER.PORT}`;

const getBook = async (req, res) => {
  const filter = {
    _id: req.params.id,
  };
  const book = await booksService.getBook({ filter }).lean();
  book.bookUrl = new URL(`/public/books/${book.file}`, serverURL).href;
  book.imageURl = new URL(`/public/booksImages/${book.image}`, serverURL).href;
  res.status(200).json(new SuccessResponseDTO({ book }));
};

const getBooks = async (req, res) => {
  const page = Number(req.params.page) - 1;
  const count = Number(req.params.count);
  const booksCount = await booksService.getCount();
  const pagesCount = Math.ceil(booksCount / count);

  const books = await booksService
    .getBooks({
      skip: count * page,
      limit: count,
    })
    .lean();

  books.forEach((book) => {
    book.bookUrl = new URL(`/public/books/${book.file}`, serverURL).href;
    book.imageURl = new URL(`/public/booksImages/${book.image}`, serverURL).href;
  });

  console.log(books);
  res.status(200).json(new SuccessResponseDTO({ books, booksCount, pagesCount }));
};

export default {
  getBook,
  getBooks,
};
