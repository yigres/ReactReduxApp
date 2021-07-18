import React, { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRepos } from "../actions/repos";
import "./main.less"
import Repo from "./repo/Repo";

const Main = () => {
  const dispatch = useDispatch();
  const repos = useSelector((state) => state.repos.items);
  const isFetching = useSelector((state) => state.repos.isFetching);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    dispatch(getRepos());
  }, []);

  function searchHanler() {
    dispatch(getRepos(searchValue));
  }

  return (
    <div>
      <div className="search">
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" placeholder="Input repo name" className="search-input" />
        <button onClick={() => searchHanler()} className="search-btn">Search</button>
      </div>

      {
        isFetching === false
          ?
        repos.map(repo => <Repo repo={repo} />)
          :
        <div className="fetching">

        </div>
      }
    </div>
  )
}

export default Main;
