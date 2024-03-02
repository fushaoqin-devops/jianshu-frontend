import { RecommendWrapper, RecommendItem } from "../style";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchRecommendList } from "../homeSlice";

function Recommend() {
  const dispatch = useDispatch();
  const recommendList = useSelector((state) => state.home.recommendList);

  useEffect(() => {
    dispatch(fetchRecommendList());
  }, [dispatch]);

  return (
    <RecommendWrapper>
      {recommendList.map((item) => (
        <RecommendItem key={item.id} $imgurl={item.url}></RecommendItem>
      ))}
    </RecommendWrapper>
  );
}

export default Recommend;
