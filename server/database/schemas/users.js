import { Schema } from "mongoose";
export default new Schema({
    firstName: Schema.Types.String,
    lastName: Schema.Types.String,
    email: Schema.Types.String,
    password: Schema.Types.String,
    rating: Schema.Types.Number,
}, {
    timestamps: true
});