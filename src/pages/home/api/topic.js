import request from "../../../utils/request";

const topicAPI = {
  fetchTopicList() {
    return request({
      url: "/topic/list",
      method: "get",
    });
  },
  test() {
    return request({
      url: "/topic/test",
      method: "get",
    });
  },
};

export default topicAPI;
