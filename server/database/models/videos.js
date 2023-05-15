import videoSchema from "../schemas/videos.js";
import { model } from "mongoose";
export default model("Videos", videoSchema, "videos");
