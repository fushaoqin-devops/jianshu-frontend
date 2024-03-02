import styled from "styled-components";
import logoPic from "../../statics/logo.png";

export const LoginWrapper = styled.div`
  background-color: #eee;
  position: absolute;
  z-index: 0;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
`;

export const LoginContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 820px;
  height: 600px;
  margin: 0 auto;
  background-image: url("/login.png");
  background-size: 40%;
  background-repeat: no-repeat;
  background-position: 45px 0;
}`;

export const LoginDownload = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 452px;
  left: 60px;
}`;

export const LoginQR = styled.div`
  position: relative;
  width: 46px;
  height: 46px;
  border-radius: 5px;
  background-image: url("/qr.png");
  background-size: 38px;
  background-repeat: no-repeat;
  background-position: 4px 4px;
  background-color: #fff;
  .qr-large {
    position: absolute;
    top: -185px;
    left: -100px;
    width: 160px;
    height: 160px;
    border-radius: 10px;
    background-image: url("/qr.png");
    background-color: #fff;
    background-size: 132px;
    background-repeat: no-repeat;
    background-position: 50%;
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.15);
    z-index: 1;
    opacity: 0;
    visibility: hidden;
  }
  .qr-icon {
    width: 21px;
    height: 21px;
    position: absolute;
    background-color: #fff;
    transform: rotate(45deg);
    box-shadow: 0 0 15px -15px rgba(0, 0, 0, 0.15);
    bottom: 60px;
    right: 20px;
    z-index: 10;
    opacity: 0;
    visibility: hidden;
  }
  &:hover .qr-large,
  &:hover .qr-icon {
    opacity: 1;
    visibility: visible;
  }
`;

export const LoginBox = styled.div`
  margin: 0 auto;
  float: right;
  width: 400px;
  height: 505px;
  box-sizing: border-box;
  padding: 50px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0, 0, 0, 0.1);
  border-radius: 4px;
  &.register {
    height: 570px;
  }
`;

export const Input = styled.input`
  display: block;
  box-sizing: border-box;
  width: 300px;
  height: 50px;
  line-height: 30px;
  padding: 0 10px;
  margin: 0 auto;
  padding-left: 35px;
  color: #777;
  border: 1px solid #c8c8c8;
  background-color: hsla(0, 0%, 71%, 0.1);
  &:focus {
    outline: none;
  }
`;

export const Button = styled.div`
  width: 300px;
  height: 43px;
  line-height: 30px;
  color: #fff;
  background-color: #3194d0;
  padding: 9px 18px;
  box-sizing: border-box;
  border-radius: 25px;
  text-align: center;
  margin: 10px auto;
  cursor: pointer;
  font-size: 18px;
  &.register {
    background-color: #42c02e;
    margin-top: 20px;
  }
  &.download {
    width: 252px;
    height: 46px;
    margin-right: 15px;
    background-color: #ea6f5a;
    border-radius: 30px;
    font-weight: 500;
  }
`;

export const InputGroup = styled.div`
  .user {
    border-radius: 4px 4px 0 0;
    border-bottom: 0; // Remove the bottom border
  }

  .pass {
    border-radius: 0 0 4px 4px;
  }
  .phone {
    border-bottom: 0;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  wdith: 300px;
  box-sizing: border-box;
  .iconfont {
    font-size: 18px;
    position: absolute;
    top: 17px;
    left: 10px;
    color: #969696;
  }
`;

export const LoginHeaderWrapper = styled.h4`
    width: 300px;
    box-sizing: border-box;
    margin: 0 auto 50px;
    padding: 10px;
    font-weight: 400;
    text-align: center;
    color: #969696;
    font-size: 18px;
}`;

export const LoginHeader = styled.div`
  text-align: center;
  display: inline-block;
  box-sizing: border-box;
  font-size: 18px;
  color: #969696;
  b {
    margin: 0 10px;
  }
  a {
    padding: 10px;
    margin: 10px 0;
    color: #969696;
    text-decoration: none;
    &.active {
      color: #ea6f5a;
      border-bottom: 2px solid #ea6f5a;
    }
    &:hover {
      border-bottom: 2px solid #ea6f5a;
    }
  }
`;

export const LoginRememberWrapper = styled.div`
  width: 300px;
  margin: 15px auto;
  color: #969696;
  input {
    margin-right: 5px;
  }
  span {
    margin-right: 10px;
    font-size: 15px;
  }
  a {
    float: right;
    color: #969696;
    line-height: 20px;
    text-decoration: none;
    font-size: 14px;
  }
`;

export const LoginOption = styled.div`
  width: 300px;
  margin: 50px auto;
  text-align: center;
  font-weight: 500;
  h6 {
    position: relative;
    margin: 0 0 10px;
    font-size: 12px;
    color: #b5b5b5;
  }
  h6::before {
    content: "";
    position: absolute;
    left: 30px;
    top: 5px;
    width: 60px;
    border-top: 1px solid #b5b5b5;
  }
  h6::after {
    content: "";
    position: absolute;
    right: 30px;
    top: 5px;
    width: 60px;
    border-top: 1px solid #b5b5b5;
  }
  ul {
    padding: 0;
    margin-bottom: 10px;
    list-style: none;
    a {
      width: 50px;
      height: 50px;
      line-height: 50px;
      display: block;
      text-decoration: none;
    }
    li {
      display: inline-block;
        margin: 0 10px;
      i {
        font-size: 32px;
        color: #969696;
        &.weibo {
          color: #e05244;
        }
        &.weixin {
          color: #00bb29;
        }
        &.qq {
          color: #498ad5;
          font-size: 30px;
      }
    }
  }
`;

export const SignupMessage = styled.p`
  margin: 10px auto;
  text-align: center;
  font-size: 12px;
  color: #969696;
  line-height: 20px;
  a {
    color: #3194d0;
  }
  a:hover {
    text-decoration: none;
  }
`;

export const Logo = styled.div`
  position: absolute;
  top: 56px;
  left: 50px;
  display: block;
  width: 150px;
  height: 106px;
  background: url(${logoPic});
  background-size: contain;
`;
