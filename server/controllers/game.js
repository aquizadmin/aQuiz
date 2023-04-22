import questionService from "../services/questions.js";
import usersService from "../services/users.js";
import arrayRandomSorting from "../helpers/documentsRandomSorting.js";
import { SuccessResponseDTO, ErrorResponseDTO } from "../DTO/index.js";
import { GAME } from "../config/index.js";

const startGame = async (req, res) => {
  const filter = { category: req.body.category };
  const select = { question: 1, answers: 1 };
  const limit = Math.ceil(req.body.duration * GAME.QUESTION_MORE_THEN_TIME);
  const questions = await questionService.getQuestions({ filter, select, limit });
  const randomlySortedDocuments = arrayRandomSorting({ array: questions });
  res.status(200).json(new SuccessResponseDTO(randomlySortedDocuments));
};

const finishGame = async (req, res) => {
  const allAnswers = req.body.answers;
  const answers = allAnswers.filter((answer) => answer.answer !== -1);
  const questionIds = answers.map((question) => question._id);

  const filter = {
    _id: { $in: questionIds },
  };
  const select = { correct_answer: 1 };
  const correctAnswers = await questionService.getQuestions({ filter, select });

  answers.forEach((q) => {
    const correctAnswer = correctAnswers.find((c) => q._id === c._id.toString());
    q.correctAnswer = correctAnswer.correct_answer;
  });
  const correctAnswersCount = answers.reduce((sum, question) => {
    return question.correctAnswer === question.answer ? sum + 1 : sum;
  }, 0);

  const points = correctAnswersCount * GAME.POINTS_PER_ANSWER;
  const userUpdateFilter = { _id: req.user._id };
  const userUpdate = { $inc: { rating: points } };
  await usersService.updateUser({ filter: userUpdateFilter, update: userUpdate });

  res.status(200).json(
    new SuccessResponseDTO({
      questionsCount: allAnswers.length,
      correctAnswersCount: correctAnswersCount,
      points: points,
      answers: answers,
    }),
  );
};

export default {
  startGame,
  finishGame,
};
