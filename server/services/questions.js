import questionsModel from "../database/models/questions.js";

const getQuestion = ({ find, select } = {}) => {
  return questionsModel.findOne(find).select(select);
};

const getQuestions = ({ filter, select, sort, skip, limit } = {}) => {
  return questionsModel.find(filter).select(select).sort(sort).skip(skip).limit(limit);
};

const createQuestion = ({ question, answers, correct_answer, tags, category, difficulty }) => {
  return questionsModel.create({ question, answers, correct_answer, tags, category, difficulty });
};

const getUniqValuesOfField = ({ fieldName }) => {
  return questionsModel.distinct(fieldName);
};

export default {
  getQuestion,
  getQuestions,
  createQuestion,
  getUniqValuesOfField,
};
