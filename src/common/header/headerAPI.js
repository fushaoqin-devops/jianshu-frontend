import request from "../../utils/request";

const headerAPI = {
  fetchHotSearchList(page, limit) {
    return request({
      url: `/search/trendingList/${page}/${limit}`,
      method: "get",
    });
  },
  fetchSearchResult(keyword) {
    return request({
      url: `/search/keyword/${keyword}`,
      method: "get",
    });
  },
};

export default headerAPI;
