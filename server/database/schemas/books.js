import { Schema } from "mongoose";
export default new Schema(
  {
    imageURL: Schema.Types.String,
    bookURL: Schema.Types.String,
    category: Schema.Types.String,
  },
  {
    timestamps: true,
  },
);
