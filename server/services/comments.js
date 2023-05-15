import commentsModel from "../database/models/comments.js";

const create = ({userId, comment}) => {
  return commentsModel.create({ userId, comment });
}

const getLast = ({filter}) => {
  return commentsModel.findOne({filter}).sort({_id: -1});
}

const getCount = () => {
  return commentsModel.count();
};

const getMany = ({ filter = {}, select= {}, skip= {}, limit= {}, sort= {} }) => {
  return commentsModel.find(filter).select(select).skip(skip).limit(limit).sort(sort);
};

export default {
  create,
  getLast,
  getCount,
  getMany,
}
