import request from "../../../utils/request";

const searchAPI = {
  fetchSearchResult(keyword) {
    return request({
      url: `/search/keyword/${keyword}`,
      method: "get",
    });
  },
};

export default searchAPI;
