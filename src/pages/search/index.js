import { Link } from "react-router-dom";
import { ListItem, ListInfo } from "../home/style";
import { useSelector } from "react-redux";
import { SearchWrapper, SearchContainer } from "./style";

function Search() {
  const articleList = useSelector((state) => state.search.searchResult);

  return (
    <SearchWrapper>
      <SearchContainer>
        {articleList.map((item) => (
          <div key={item.id} className="search-item">
            <Link to={"/detail/" + item.id}>
              <ListItem>
                <img className="pic" src={item.avatar} alt="article" />
                <ListInfo>
                  <h3 className="title">{item.title}</h3>
                  <p className="desc">{item.desc}</p>
                  <span className="stats">
                    {item.author} <i className="iconfont">&#xe684;</i> 999{" "}
                    <i className="iconfont">&#xe60f;</i> 999
                  </span>
                </ListInfo>
              </ListItem>
            </Link>
          </div>
        ))}
      </SearchContainer>
    </SearchWrapper>
  );
}

export default Search;
