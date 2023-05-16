import commentSchema from "../schemas/comments.js";
import { model } from "mongoose";
export default model("Comments", commentSchema, "comments");
