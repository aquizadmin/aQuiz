import { COMMENT } from "../config/index.js";
import usersService from "../services/users.js";
import commentsService from "../services/comments.js";
import { ErrorResponseDTO, SuccessResponseDTO } from "../DTO/index.js";

const getUserByID = async (req, res) => {
  const filter = { _id: req.params.id };
  const user = await usersService.getUser({ filter });
  res.status(200).json(new SuccessResponseDTO(user));
};

const getUsersStatistic = async (req, res) => {
  const page = Number(req.params.page) - 1;
  const count = Number(req.params.count);

  const usersCount = await usersService.getUsersCount();
  const pagesCount = Math.ceil(usersCount / count);
  const users = await usersService.getUsers({
    filter: {},
    select: { firstName: 1, lastName: 1, rating: 1 },
    skip: count * page,
    limit: count,
    sort: { rating: -1 },
  });

  res.status(200).json(new SuccessResponseDTO({ users, usersCount, pagesCount }));
};

const me = async (req, res) => {
  return res.json(new SuccessResponseDTO(req.user));
};

const addComment = async (req, res) => {
  const filter = { userId: req.user._id };
  const lastComment = await commentsService.getLast(filter);

  if (lastComment) {
    const lastCommentCreatedAt = lastComment.createdAt.valueOf();
    const diffBetween = (new Date) - lastCommentCreatedAt;
    if (diffBetween < COMMENT.SEND_ONCE_PER) {
      return res.status(400).json(new ErrorResponseDTO(`Only one comment per ${COMMENT.SEND_ONCE_PER_IN_TEXT}`));
    }
  }

  const newCommentData = {
    userId: req.user._id,
    comment: req.body.comment,
  }
  const comment = await commentsService.create(newCommentData)
  res.status(200).json(new SuccessResponseDTO({ comment }));
};

const getComments = async (req, res) => {
  const page = Number(req.params.page) - 1;
  const count = Number(req.params.count);
  const commentsCount = await commentsService.getCount();
  const pagesCount = Math.ceil(commentsCount / count);

  const comments = await commentsService.getMany({
    skip: count * page,
    limit: count,
  });

  res.status(200).json(new SuccessResponseDTO({ comments, commentsCount, pagesCount }));
}


export default {
  getUserByID,
  getUsersStatistic,
  me,
  addComment,
  getComments,
};
