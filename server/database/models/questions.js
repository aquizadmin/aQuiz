import questionSchema from "../schemas/questions.js";
import { model } from "mongoose";
export default model("Questions", questionSchema, "questions");
