import bookSchema from "../schemas/books.js";
import { model } from "mongoose";
export default model("Books", bookSchema, "books");
