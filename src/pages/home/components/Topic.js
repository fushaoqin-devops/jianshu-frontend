import { TopicWrapper, TopicItem, TopicExpand } from "../style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchTopicList } from "../homeSlice";

function Topic() {
  const dispatch = useDispatch();
  const topicList = useSelector((state) => state.home.topicList);
  const [visibleCount, setVisibleCount] = useState(8);
  const expandText = visibleCount === 8 ? "更多热门专题 >" : "收起 ^";

  useEffect(() => {
    dispatch(fetchTopicList());
  }, [dispatch]);

  const handleExpandClick = () => {
    setVisibleCount((prevCount) => (prevCount === 8 ? topicList.length : 8));
  };

  return (
    <TopicWrapper>
      {topicList.slice(0, visibleCount).map((item) => (
        <TopicItem key={item.id}>
          <img className="topic-pic" src={item.imgUrl} alt="topic" />
          {item.title}
        </TopicItem>
      ))}
      <TopicExpand className="expand" onClick={handleExpandClick}>
        {expandText}
      </TopicExpand>
    </TopicWrapper>
  );
}

export default Topic;
