import { Fragment, useEffect } from "react";
import {
  Content,
  DetailWrapper,
  Header,
  DetailContainer,
  DetailCard,
  DetailAuthorCard,
  DetailAuthorContainer,
  DetailArticleInfo,
  DetailArticleAuthor,
  DetailArticleStats,
  LineBreak,
  AuthorArticle,
  DetailSidebar,
  DetailSidebarItem,
} from "./style";
import { Link, useParams } from "react-router-dom";
import { fetchArticle } from "./detailSlice";
import { useDispatch, useSelector } from "react-redux";

function Detail() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const article = useSelector((state) => state.detail.article);

  useEffect(() => {
    if (id) dispatch(fetchArticle(id));
  }, [id, dispatch]);
  return (
    <DetailWrapper>
      <DetailSidebar>
        <DetailSidebarItem>
          <div className="icon">
            <i className="iconfont">&#xe63a;</i>
          </div>
          <div className="info">396赞</div>
        </DetailSidebarItem>
        <DetailSidebarItem>
          <div className="icon">
            <i className="iconfont shang">&#xe691;</i>
          </div>
          <div className="info">8赞赏</div>
        </DetailSidebarItem>
        <DetailSidebarItem>
          <div className="icon">
            <i className="iconfont">&#xe7dd;</i>
          </div>
          <div className="info">更多好文</div>
        </DetailSidebarItem>
      </DetailSidebar>
      <DetailContainer>
        <DetailCard>
          <Header>{article.title}</Header>
          <DetailAuthorContainer>
            <img
              className="avatar"
              src="https://upload.jianshu.io/users/upload_avatars/26300290/1f5875b7-10f2-4011-b03a-1b79aeb2b0cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              alt=""
            />
            <DetailArticleInfo>
              <DetailArticleAuthor>
                <span>{article.author}</span>
                <img
                  src="https://upload.jianshu.io/user_badge/b4853dc7-5c16-4875-a2cd-7cf764bbd934"
                  alt="icon"
                ></img>
                <div className="follow">关注</div>
                <span className="location">IP属地: 广东</span>
              </DetailArticleAuthor>
              <DetailArticleStats>
                <span className="diamond">
                  <i className="iconfont">&#xe63d;</i> 299
                </span>
                <time className="time">{article.createString}</time>
                <span className="words">字数 {article.wordCount}</span>
                <span className="reads">阅读 1,000</span>
              </DetailArticleStats>
            </DetailArticleInfo>
          </DetailAuthorContainer>
          <Content>
            {/* <img src={article.avatar} alt={article.title} /> */}
            <p>
              {" "}
              {article.content &&
                article.content.split("\n").map((line, index, array) =>
                  array.length - 1 === index ? (
                    line
                  ) : (
                    <Fragment key={index}>
                      {line}
                      <br />
                    </Fragment>
                  )
                )}
            </p>
          </Content>
        </DetailCard>
        <DetailAuthorCard>
          <DetailAuthorContainer>
            <img
              className="avatar sm"
              src="https://upload.jianshu.io/users/upload_avatars/26300290/1f5875b7-10f2-4011-b03a-1b79aeb2b0cc.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp"
              alt=""
            />
            <DetailArticleInfo>
              <DetailArticleAuthor>
                <span className="sm">{article.author}</span>
                <img
                  src="https://upload.jianshu.io/user_badge/b4853dc7-5c16-4875-a2cd-7cf764bbd934"
                  alt="icon"
                ></img>
                <div className="follow sm">关注</div>
              </DetailArticleAuthor>
              <DetailArticleStats>
                <span>总资产4.4W</span>
              </DetailArticleStats>
            </DetailArticleInfo>
          </DetailAuthorContainer>
          <LineBreak></LineBreak>
          {article.others &&
            Object.entries(article.others).map(([id, name]) => (
              <AuthorArticle key={id}>
                <div className="article-title">
                  <Link to={"/detail/" + id}>{name}</Link>
                </div>
                <div className="article-read">阅读 9,999</div>
              </AuthorArticle>
            ))}
        </DetailAuthorCard>
      </DetailContainer>
    </DetailWrapper>
  );
}

export default Detail;
