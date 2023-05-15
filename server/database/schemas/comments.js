import { Schema } from "mongoose";
export default new Schema(
  {
    userId: Schema.Types.ObjectId,
    comment: Schema.Types.String,
  },
  {
    timestamps: true,
  },
);
