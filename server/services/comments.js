import commentsModel from "../database/models/comments.js";

export const create = ({userId, comment}) => {
  return commentsModel.create({ userId, comment });
}

export const getLastByUserId = ({userId}) => {
  return commentsModel.find({userId}).limit(1).sort({_id: -1});
}
