import videosModel from "../database/models/videos.js";

const getVideo = ({ filter = {}, select = {} } = {}) => {
  return videosModel.findOne(filter, select);
};

const getVideos = ({ filter = {}, select = {}, skip = {}, limit = {}, sort = {} } = {}) => {
  return videosModel.find(filter).select(select).skip(skip).limit(limit).sort(sort);
};

const getCount = () => {
  return videosModel.count();
};

export default {
  getVideo,
  getVideos,
  getCount,
};
