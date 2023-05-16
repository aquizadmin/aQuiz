import videosService from "../services/videos.js";
import { SuccessResponseDTO } from "../DTO/index.js";

const getVideo = async (req, res) => {
  const filter = {
    _id: req.params.id,
  };
  const video = await videosService.getVideo({ filter });
  res.status(200).json(new SuccessResponseDTO({ video }));
};

const getVideos = async (req, res) => {
  const page = Number(req.params.page) - 1;
  const count = Number(req.params.count);
  const category = req.params.category;

  const filter = {};
  if (category) filter.category = category;

  const videosCount = await videosService.getCount({ filter });
  const videos = await videosService
    .getVideos({
      filter: filter,
      skip: count * page,
      limit: count,
    })
    .lean();

  const pagesCount = Math.ceil(videosCount / count);
  res.status(200).json(new SuccessResponseDTO({ videos, videosCount, pagesCount }));
};

export default {
  getVideo,
  getVideos,
};