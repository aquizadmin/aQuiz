import { Schema } from "mongoose";
export default new Schema(
  {
    question: Schema.Types.String,
    answers: [
      {
        type: String,
      },
    ],
    correct_answer: Schema.Types.Number,
    tags: [
      {
        type: String,
      },
    ],
    category: Schema.Types.String,
    difficulty: Schema.Types.String,
  },
  {
    timestamps: true,
  },
);
