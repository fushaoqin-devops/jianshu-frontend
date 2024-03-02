import styled from "styled-components";

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
`;

export const HomeLeft = styled.div`
  float: left;
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  .banner-img {
    width: 625px;
    height: 270px;
  }
`;

export const HomeRight = styled.div`
  width: 280px;
  float: right;
`;

export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
  float: left;
  background: #f7f7f7;
  height: 32px;
  line-height: 32px;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`;

export const TopicExpand = styled.div`
  display: block;
  float: left;
  height: 32px;
  line-height: 32px;
  text-align: center;
  color: #787878;
  margin-left: 18px;
  margin-bottom: 18px;
  cursor: pointer;
`;

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`;

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
    margin-bottom: 10px;
  }
  .stats {
    line-height: 20px;
    font-size: 12px;
    color: #b4b4b4;
    .iconfont {
      font-size: 12px;
      margin-left: 5px;
    }
  }
`;

export const WriterWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
  height: 300px;
`;

export const WriterTitle = styled.div`
  margin-bottom: 20px;
  width: 280px;
  height: 30px;
  line-height: 30px;
  font-size: 14px;
  color: #969696;
  .change {
    float: right;
    cursor: pointer;
  }
`;

export const WriterItem = styled.div`
  position: relative;
  width: 280px;
  height: 50px;
  display: inline-block;
  margin-bottom: 15px;
  .pic {
    display: block;
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    margin-right: 10px;
    cursor: pointer;
  }
  h3 {
    cursor: pointer;
  }
  .follow {
    position: absolute;
    right: 0;
    top: 0;
    margin-top: 5px;
    color: #42c02e;
    font-size: 13px;
    cursor: pointer;
    .plus {
      font-size: 14px;
      margin-right: -4px;
      font-weight: bold;
    }
    &.followed {
      cursor: default;
    }
  }
`;

export const WriterInfo = styled.div`
  width: 280px;
  height: 50px;
  line-height: 25px;
  color: #333;
  font-size: 14px;
  .stats {
    color: #969696;
    font-size: 12px;
  }
`;

export const RecommendWrapper = styled.div`
  margin: 30px 0;
  width: 280px;
`;

export const RecommendItem = styled.div`
  width: 280px;
  height: 50px;
  background: url(${(props) => props.$imgurl});
  background-size: contain;
  margin-bottom: 6px;
  cursor: pointer;
`;

export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`;

export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
  font-size: 14px;
  cursor: pointer;
  .iconfont {
    font-size: 30px;
  }
`;
