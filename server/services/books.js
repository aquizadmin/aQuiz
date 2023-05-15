import booksModel from "../database/models/books.js";

const getBook = ({ filter = {}, select= {} } = {}) => {
  return booksModel.findOne(filter, select);
};

const getBooks = ({ filter = {}, select= {}, skip= {}, limit= {}, sort= {} } = {}) => {
  return booksModel.find(filter).select(select).skip(skip).limit(limit).sort(sort);
};

const getCount = () => {
  return booksModel.count();
};

export default {
  getBook,
  getBooks,
  getCount,
}