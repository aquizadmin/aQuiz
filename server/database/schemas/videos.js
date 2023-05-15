import { Schema } from "mongoose";
export default new Schema(
  {
    name: Schema.Types.String,
    url: Schema.Types.String,
    category: Schema.Types.String,
  },
  {
    timestamps: true,
  },
);
