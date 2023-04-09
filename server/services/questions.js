import questionsModel from "../database/models/questions.js";

const getQuestion = ({find, select} = {}) => {
    return questionsModel.findOne(find).select(select);
}

const createQuestion = ({question, answers, correct_answer, tags, category, difficulty}) => {
    return questionsModel.create({question, answers, correct_answer, tags, category, difficulty});
}

export default {
    getQuestion,
    createQuestion,
}
