import { MONGODB } from "../config/index.js";
import mongoose from "mongoose";

const connection = await mongoose.connect(`mongodb://${MONGODB.HOST}:${MONGODB.PORT}/${MONGODB.DATABASE.NAME}`, {
  useNewUrlParser: true,
});
export default connection;
