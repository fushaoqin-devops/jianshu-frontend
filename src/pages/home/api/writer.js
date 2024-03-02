import request from "../../../utils/request";

const writerAPI = {
  fetchWriterList(page, limit) {
    return request({
      url: `/user/userInfo/${page}/${limit}`,
      method: "get",
      withCredentials: true,
    });
  },
  fetchWriterArticleList(id) {
    return request({
      url: `/article/userArticle/${id}`,
      method: "get",
      withCredentials: true,
    });
  },
  followWriter(id) {
    return request({
      url: `/user/follow/${id}`,
      method: "post",
      withCredentials: true,
    });
  },
};

export default writerAPI;
