import { useDispatch, useSelector } from "react-redux";
import { WriterWrapper, WriterItem, WriterInfo, WriterTitle } from "../style";
import { useEffect, useRef } from "react";
import { fetchWriterList, switchWriters, followWriter } from "../homeSlice";
import { useNavigate } from "react-router-dom";
import { fectchWriterArticleList } from "../../search/searchSlice";
import { toast } from "react-toastify";

function Writer() {
  const dispatch = useDispatch();
  const writerList = useSelector((state) => state.home.writerList);
  const iconSwitchRef = useRef(null);
  const navigate = useNavigate();
  const isLoggedIn = useSelector((state) => state.auth.login);

  useEffect(() => {
    dispatch(fetchWriterList());
  }, [dispatch]);

  const handleSwitch = () => {
    let angle = iconSwitchRef.current.style.transform.replace(/[^0-9]/gi, "");
    angle = angle ? parseInt(angle, 10) : 0;
    iconSwitchRef.current.style.transform = `rotate(${angle + 360}deg)`;

    dispatch(switchWriters());
    dispatch(fetchWriterList());
  };

  const handleWriterClick = (id) => {
    dispatch(fectchWriterArticleList(id));
    navigate("/search");
  };

  const handleFollow = (id) => {
    if (!isLoggedIn) {
      toast.info("请先登录");
    } else {
      dispatch(followWriter(id));
    }
  };

  return (
    <WriterWrapper>
      <WriterTitle>
        <span>推荐作者</span>
        <span className="change" onClick={handleSwitch}>
          <i ref={iconSwitchRef} className="iconfont spin">
            &#xe851;
          </i>
          换一批
        </span>
      </WriterTitle>
      {writerList.map((item) => (
        <WriterItem key={item.id}>
          <div onClick={() => handleWriterClick(item.id)}>
            <img className="pic" src={item.avatar} alt="Writer" />
          </div>
          <WriterInfo>
            <h3 onClick={() => handleWriterClick(item.id)}>{item.name}</h3>
            <p className="stats">写了{item.wordCount}字 · 1000喜欢</p>
          </WriterInfo>
          {item.followed ? (
            <span className="follow followed">已关注</span>
          ) : (
            <span className="follow" onClick={() => handleFollow(item.id)}>
              <i className="iconfont plus">&#xe8fe;</i> 关注
            </span>
          )}
        </WriterItem>
      ))}
    </WriterWrapper>
  );
}

export default Writer;
