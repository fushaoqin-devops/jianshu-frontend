import { ListItem, ListInfo, LoadMore } from "../style";
import { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { increment, clearArticleList, fetchArticleList } from "../homeSlice";
import { Link } from "react-router-dom";

function List() {
  const dispatch = useDispatch();
  const articleList = useSelector((state) => state.home.articleList);
  const showMore = useSelector((state) => state.home.showMore);
  const initialized = useRef(false);

  useEffect(() => {
    dispatch(clearArticleList());
    if (!initialized.current) {
      initialized.current = true;
      dispatch(fetchArticleList());
    }
  }, [dispatch]);

  const handleLoadMore = () => {
    dispatch(increment());
    dispatch(fetchArticleList());
  };

  return (
    <>
      {articleList.map((item) => (
        <Link key={item.id} to={"/detail/" + item.id}>
          <ListItem>
            <img className="pic" src={item.avatar} alt="article" />
            <ListInfo>
              <h3 className="title">{item.title}</h3>
              <p className="desc">{item.desc}</p>
              <span className="stats">
                {item.author} <i className="iconfont">&#xe684;</i> 9,999{" "}
                <i className="iconfont">&#xe60f;</i> 9,999
              </span>
            </ListInfo>
          </ListItem>
        </Link>
      ))}
      {showMore && <LoadMore onClick={handleLoadMore}>加载更多</LoadMore>}
    </>
  );
}

export default List;
