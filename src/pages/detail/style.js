import styled from "styled-components";

export const DetailWrapper = styled.div`
  background-color: red;
  width: 100%;
  margin: 0 auto;
  padding-bottom: 100px;
  background-color: #f9f9f9;
`;

export const DetailContainer = styled.div`
  display: flex;
  font-size: 16px;
  box-sizing: content-box;
  padding: 0 20px;
  margin: 0 auto;
  width: 1000px;
  .avatar {
    display: block;
    border-radius: 50%;
    border: 1px solid #eee;
    width: 50px;
    height: 50px;
    vertical-align: middle;
    &.sm {
      width: 45px;
      height: 45px;
    }
  }
}`;

export const DetailAuthorContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 32px;
`;

export const DetailArticleInfo = styled.div`
  margin-left: 10px;
`;

export const DetailArticleAuthor = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 6px;
  span {
    font-size: 16px;
    font-weight: 500;
    margin-right: 8px;
    &.sm {
      font-size: 14px;
    }
  }
  img {
    width: 16px;
    height: 16px;
    margin-right: 8px;
  }
  .follow {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: #ec7259;
    wdith: 24px;
    height: 17px;
    border-color: #ec7259;
    background-color: #fff;
    border-radius: 50px;
    border: 1px solid #ec7259;
    padding: 2px 9px;
    font-size: 12px;
    &.sm {
      margin-left: auto;
    }
  }
  .location {
    margin-left: 5px;
    height: 11px;
    font-size: 12px;
    font-family: PingFangSC, PingFangSC-Regular;
    font-weight: 400;
    text-align: left;
    color: #9a9a9a;
    line-height: 11px;
  }
`;

export const DetailArticleStats = styled.div`
  display: flex;
  font-size: 13px;
  color: #969696;
  .diamond {
    margin-right: 10px;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    color: #ec7259;
    i {
      font-size: 12px;
      margin-right: 5px;
    }
    span {
      text-align: center;
    }
  }
  .time {
    margin-right: 10px;
  }
  .words {
    margin-right: 10px;
  }
  .reads {
    margin-right: 10px;
  }
`;

export const DetailAuthorCard = styled.div`
  width: 260px;
  height: 100%;
  background-color: #fff;
  border-radius: 4px;
  margin-top: 10px;
  padding: 16px;
`;

export const DetailCard = styled.div`
  margin: 10px 10px 24px 0;
  width: 730px;
  padding: 32px;
  background-color: #fff;
  border-radius: 4px;
  position: relative;
`;

export const Header = styled.h1`
  margin-top: 32px;
  line-height: 44px;
  font-size: 30px;
  font-weight: 700;
  color: #404040;
`;

export const Content = styled.div`
  color: #2f2f2f;
  img {
    width: 100%;
    display: block;
    margin: 25px 0;
  }
  p {
    font-size: 16px;
    line-height: 30px;
  }
`;

export const LineBreak = styled.div`
  width: 100%;
  height: 1px;
  margin: 16px 0;
  background-color: #eee;
`;

export const AuthorArticle = styled.div`
  margin-top: 16px;
  .article-title {
    font-size: 14px;
    line-height: 22px;
    color: #2d2d2d;
    margin-bottom: 4px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
  .article-read {
    font-size: 12px;
    color: #969696;
  }
`;

export const DetailSidebar = styled.div`
  position: fixed;
  z-index: 98;
  top: 216px;
  user-select: none;
  left: calc((100vw - 1000px) / 2 - 78px);
`;

export const DetailSidebarItem = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  flex-direction: column;
  margin-bottom: 16px;
  cursor: pointer;
  color: #969696;
  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 48px;
    height: 48px;
    font-size: 18px;
    border-radius: 50%;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
    background-color: #fff;
    .iconfont {
      font-size: 22px;
      display: inline-block;
      font-style: normal;
      line-height: 0;
      text-align: center;
      text-transform: none;
      vertical-align: -0.125em;
      &.shang {
        font-size: 26px !important;
      }
    }
  }
  .info {
    margin-top: 4px;
    font-size: 14px;
    text-align: center;
    height: 19px;
  }
`;
