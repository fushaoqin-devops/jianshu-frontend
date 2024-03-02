import { HomeWrapper, HomeLeft, HomeRight, BackTop } from "./style";
import List from "./components/List";
import Recommend from "./components/Recommend";
import Writer from "./components/Writer";
import Topic from "./components/Topic";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTopShow } from "./homeSlice";

function Home() {
  const dispatch = useDispatch();
  const showScroll = useSelector((state) => state.home.showScroll);

  const toggle = () => {
    if (document.documentElement.scrollTop > 100) {
      dispatch(toggleTopShow(true));
    } else {
      dispatch(toggleTopShow(false));
    }
  };

  const handleScrollTop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggle);
    return () => {
      window.removeEventListener("scroll", toggle);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <HomeWrapper>
      <HomeLeft>
        <img
          className="banner-img"
          src="//gd-hbimg.huaban.com/eadf4c8006696df4c6c3d9d5273555457a1690121c7ec-1ZcJKr_fw658"
          alt="banner"
        />
        <Topic />
        <List />
      </HomeLeft>
      <HomeRight>
        <Recommend />
        <Writer />
      </HomeRight>
      {showScroll && (
        <BackTop onClick={handleScrollTop}>
          <i className="iconfont">&#xe66d;</i>
        </BackTop>
      )}
    </HomeWrapper>
  );
}

export default Home;
