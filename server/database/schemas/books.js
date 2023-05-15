import { Schema } from "mongoose";
export default new Schema(
  {
    name: Schema.Types.String,
    imageURL: Schema.Types.String,
    bookURL: Schema.Types.String,
    category: Schema.Types.String,
  },
  {
    timestamps: true,
  },
);
