import questionService from "../services/questions.js";

const getQuestionById = async (req, res) => {
    const find = {_id: req.params.id};
    const question = await questionService.getQuestion({find});
    res.json(question);
}

const createQuestion = async (req, res) => {
    const newQuestion = await questionService.createQuestion(req.body);
    res.json(newQuestion);
}

export default {
    getQuestionById,
    createQuestion,
}