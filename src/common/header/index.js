import { useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  focus,
  blur,
  switchTrends,
  mouseEnter,
  mouseLeave,
  fetchHotSearchList,
} from "./headerSlice";
import { fetchSearchResult } from "../../pages/search/searchSlice";
import { CSSTransition } from "react-transition-group";
import {
  HeaderWrapper,
  Logo,
  Nav,
  NavItem,
  NavSearch,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoItem,
  Addition,
  Button,
  SearchWrapper,
} from "./style";
import { Link, useNavigate } from "react-router-dom";
import { logout } from "../../pages/auth/authSlice";

function Header() {
  const focused = useSelector((state) => state.header.focused);
  const mouseIn = useSelector((state) => state.header.mouseIn);
  const name = useSelector((state) => state.auth.name);
  const hotSearchList = useSelector((state) => state.header.hotSearchList);
  const loggedIn = useSelector((state) => state.auth.login);
  const dispatch = useDispatch();
  const nodeRef = useRef(null);
  const iconSwitchRef = useRef(null);
  const navigate = useNavigate();

  const handleInputFocus = () => {
    dispatch(focus());

    if (!hotSearchList || hotSearchList.length === 0)
      dispatch(fetchHotSearchList());
  };

  const handleSwitch = () => {
    let angle = iconSwitchRef.current.style.transform.replace(/[^0-9]/gi, "");
    angle = angle ? parseInt(angle, 10) : 0;
    iconSwitchRef.current.style.transform = `rotate(${angle + 360}deg)`;

    dispatch(switchTrends());
    dispatch(fetchHotSearchList());
  };

  const handleMouseenter = () => {
    dispatch(mouseEnter());
  };

  const handleMouseLeave = () => {
    dispatch(mouseLeave());
  };

  const handleLogout = () => {
    dispatch(logout());
    window.location.reload(true);
  };

  const handleSearch = (e) => {
    if (e.key !== "Enter") return;
    dispatch(fetchSearchResult(e.target.value));
    dispatch(blur());
    dispatch(mouseLeave());
    navigate("/search");
  };

  return (
    <HeaderWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <Nav>
        <NavItem className="left active">
          <i className="iconfont">&#xe602;</i>
          <Link to="/">首页</Link>
        </NavItem>
        <NavItem className="left">
          <i className="iconfont">&#xe666;</i>
          <Link to="/">下载App</Link>
        </NavItem>
        <NavItem className="left">
          <i className="iconfont">&#xe732;</i>
          <Link to="/">会员</Link>
        </NavItem>
        <NavItem className="left">
          <i className="iconfont">&#xe60b;</i>
          <Link to="/">IT技术</Link>
        </NavItem>
        {name && <NavItem className="right">{name}</NavItem>}
        <NavItem className="right">
          {loggedIn ? (
            <Link to="/" onClick={handleLogout}>
              退出
            </Link>
          ) : (
            <Link to="/login">登陆</Link>
          )}
        </NavItem>
        <NavItem className="right">
          <i className="iconfont">&#xe600;</i>
        </NavItem>
        <SearchWrapper>
          <CSSTransition
            nodeRef={nodeRef}
            in={focused}
            timeout={200}
            classNames="slide"
          >
            <NavSearch
              ref={nodeRef}
              className={focused ? "focused" : ""}
              onFocus={handleInputFocus}
              onBlur={() => dispatch(blur())}
              onKeyDown={handleSearch}
            ></NavSearch>
          </CSSTransition>
          <i
            className={focused ? "focused iconfont zoom" : "iconfont zoom"}
            onClick={handleSearch}
          >
            &#xe65f;
          </i>
          {(focused || mouseIn) && (
            <SearchInfo
              onMouseEnter={handleMouseenter}
              onMouseLeave={handleMouseLeave}
            >
              <SearchInfoTitle>
                热门搜索
                <SearchInfoSwitch onClick={handleSwitch}>
                  <i ref={iconSwitchRef} className="iconfont spin">
                    &#xe851;
                  </i>
                  换一批
                </SearchInfoSwitch>
              </SearchInfoTitle>
              <div>
                {hotSearchList.map((item) => (
                  <SearchInfoItem key={item}>{item}</SearchInfoItem>
                ))}
              </div>
            </SearchInfo>
          )}
        </SearchWrapper>
      </Nav>
      <Addition>
        <Link to="/write">
          <Button className="writing">
            <i className="iconfont">&#xe616;</i>
            写文章
          </Button>
        </Link>
        <Link to="/register">
          <Button className="reg">注册</Button>
        </Link>
      </Addition>
    </HeaderWrapper>
  );
}

export default Header;
