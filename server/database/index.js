import { MONGODB } from "../config/index.js";
import mongoose from "mongoose";

export const connect = async () => {
  mongoose.connect(`mongodb://${MONGODB.HOST}:${MONGODB.PORT}/${MONGODB.DATABASE.NAME}`, {
    useNewUrlParser: true,
  });
}
