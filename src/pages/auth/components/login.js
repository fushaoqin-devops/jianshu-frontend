import { Link, useNavigate } from "react-router-dom";
import {
  Button,
  Input,
  LoginBox,
  LoginWrapper,
  InputGroup,
  InputWrapper,
  LoginHeader,
  LoginHeaderWrapper,
  LoginRememberWrapper,
  LoginOption,
  Logo,
  LoginContainer,
  LoginDownload,
  LoginQR,
} from "../style";
import { useDispatch, useSelector } from "react-redux";
import { login, removeToast } from "../authSlice";
import { useEffect, useRef } from "react";
import { ToastContainer, toast } from "react-toastify";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const loggedIn = useSelector((state) => state.auth.login);
  const showToast = useSelector((state) => state.auth.toast);
  const account = useRef(null);
  const password = useRef(null);

  const handleLogin = () => {
    const errAccount = !account.current.value ? "账号" : null;
    const errPass = !password.current.value ? "密码" : null;
    let errFields = [errAccount, errPass].filter(Boolean).join("、");
    if (errFields) {
      toast.error(`${errFields}不能为空`);
      return;
    }

    dispatch(
      login({
        account: account.current.value,
        password: password.current.value,
      })
    );
  };

  useEffect(() => {
    if (loggedIn) {
      navigate("/");
    }
  }, [loggedIn, navigate]);

  useEffect(() => {
    if (showToast) {
      toast.info(showToast);
      removeToast();
    }
  }, [showToast]);

  return (
    <LoginWrapper>
      <Link to="/">
        <Logo />
      </Link>
      <LoginContainer>
        <LoginDownload>
          <Button className="download">下载简书APP</Button>
          <LoginQR>
            <div className="qr-large"></div>
            <div className="qr-icon"></div>
          </LoginQR>
        </LoginDownload>
        <LoginBox>
          <LoginHeaderWrapper>
            <LoginHeader>
              <Link className="active" to="/login">
                登录
              </Link>
              <b>·</b>
              <Link to="/register">注册</Link>
            </LoginHeader>
          </LoginHeaderWrapper>
          <InputGroup>
            <InputWrapper className="user">
              <i className="iconfont">&#xe7fd;</i>
              <Input
                className="user"
                placeholder="手机号或邮箱"
                ref={account}
              />
            </InputWrapper>
            <InputWrapper className="pass">
              <i className="iconfont">&#xe639;</i>
              <Input
                className="pass"
                placeholder="密码"
                type="password"
                ref={password}
              />
            </InputWrapper>
          </InputGroup>
          <LoginRememberWrapper>
            <input type="checkbox" />
            <span>记住我</span>
            <a href="/">登录遇到问题?</a>
          </LoginRememberWrapper>
          <Button className="login" onClick={handleLogin}>
            登录
          </Button>
          <LoginOption>
            <h6>社交账号登陆</h6>
            <ul>
              <li>
                <a href="/">
                  <i className="iconfont weibo">&#xe619;</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="iconfont weixin">&#xe665;</i>
                </a>
              </li>
              <li>
                <a href="/">
                  <i className="iconfont qq">&#xe609;</i>
                </a>
              </li>
            </ul>
          </LoginOption>
        </LoginBox>
      </LoginContainer>
      <ToastContainer />
    </LoginWrapper>
  );
}

export default Login;
