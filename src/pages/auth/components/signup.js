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
  LoginOption,
  SignupMessage,
  Logo,
  LoginContainer,
  LoginDownload,
  LoginQR,
} from "../style";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import { register } from "../authSlice";
import { ToastContainer, toast } from "react-toastify";

function Signup() {
  const registerSuccess = useSelector((state) => state.auth.register);
  const username = useRef(null);
  const phone = useRef(null);
  const password = useRef(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (registerSuccess) {
      navigate("/login");
    }
  }, [registerSuccess, navigate]);

  const handleRegistration = () => {
    const errName = !username.current.value ? "昵称" : null;
    const errPhone = !phone.current.value ? "电话" : null;
    const errPass = !password.current.value ? "密码" : null;
    let errFields = [errName, errPhone, errPass].filter(Boolean).join("、");
    if (errFields) {
      toast.error(`${errFields}不能为空`);
      return;
    }
    dispatch(
      register({
        name: username.current.value,
        phone: phone.current.value,
        password: password.current.value,
      })
    );
  };

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
        <LoginBox className="register">
          <LoginHeaderWrapper>
            <LoginHeader>
              <Link to="/login">登录</Link>
              <b>·</b>
              <Link className="active" to="/register">
                注册
              </Link>
            </LoginHeader>
          </LoginHeaderWrapper>
          <InputGroup>
            <InputWrapper className="user">
              <i className="iconfont">&#xe7fd;</i>
              <Input className="user" placeholder="你的昵称" ref={username} />
            </InputWrapper>
            <InputWrapper className="phone">
              <i className="iconfont">&#xe686;</i>
              <Input className="phone" placeholder="手机号" ref={phone} />
            </InputWrapper>
            <InputWrapper className="pass">
              <i className="iconfont">&#xe639;</i>
              <Input
                className="pass"
                placeholder="设置密码"
                type="password"
                ref={password}
              />
            </InputWrapper>
          </InputGroup>
          <Button className="register" onClick={handleRegistration}>
            注册
          </Button>
          <SignupMessage>
            点击 “注册” 即表示您同意并愿意遵守简书
            <br />{" "}
            <a target="_blank" href="/">
              用户协议
            </a>{" "}
            和{" "}
            <a target="_blank" href="/">
              隐私政策
            </a>{" "}
            。
          </SignupMessage>
          <LoginOption>
            <h6>社交账号直接注册</h6>
            <ul>
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

export default Signup;
