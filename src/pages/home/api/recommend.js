import request from "../../../utils/request";

const recommendAPI = {
  fetchRecommendList() {
    return request({
      url: "/recommend/list",
      method: "get",
    });
  },
};

export default recommendAPI;
