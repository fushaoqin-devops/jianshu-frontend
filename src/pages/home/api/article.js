import request from "../../../utils/request";

const articleAPI = {
  fetchArticleList(page) {
    return request({
      url: `/article/list/${page}`,
      method: "get",
    });
  },
  fetchArticle(id) {
    return request({
      url: `/article/${id}`,
      method: "get",
    });
  },
  addArticle(payload) {
    return request({
      url: "/article/add",
      method: "post",
      data: payload,
      withCredentials: true,
    });
  },
};

export default articleAPI;
