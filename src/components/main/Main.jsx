import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentPage } from "../../reducers/reposReducer";
import { getRepos } from "../actions/repos";
import "./main.less"
import Repo from "./repo/Repo";
import { createPages } from "../../utils/pagesCreator";
import { Redirect } from "react-router-dom";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const currentPage = useSelector((state) => state.repos.currentPage);
  const totalCount = useSelector((state) => state.repos.totalCount);
  const perPage = useSelector((state) => state.repos.perPage);
  const isFetchError = useSelector((state) => state.repos.isFetchError);
  const [searchValue, setSearchValue] = useState("");
  const pagesCount = Math.ceil(totalCount / perPage);
  const pages = [];
  createPages(pages, pagesCount, currentPage);

  useEffect(() => {
    dispatch(getRepos(searchValue, currentPage, perPage));
  }, [currentPage]);

  function searchHanler() {
    dispatch(setCurrentPage(1));
    dispatch(getRepos(searchValue, currentPage, perPage));
  }

  // if(isFetchError) {
  //   return <Redirect to='/error' />
  // }

  return (
    <div>
      { isFetchError &&
      <div className="alert alert-danger" role="alert">
        Произошла ошибка. Пожалуйста обновите страницу!
      </div>
      }
      <div className="search">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input" />
        <button onClick={() => searchHanler()} className="search-btn">Search</button>
      </div>

      {
        isFetching === false
          ? repos.map((repo, index) => <Repo key={index} repo={repo} />)
          : (
              <div className="fetching">

              </div>
          )
      }

      <div className="pages">
        { pages.map((page, index) => <span
            key={index}
            className={currentPage === page ? "current-page" : "page"}
            onClick={() => dispatch(setCurrentPage(page))}>{page}</span>)}
      </div>
    </div>
  )
}

export default Main;
