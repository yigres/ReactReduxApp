import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route } from "react-router-dom";
import Main from "./main/Main"
import "./app.less"

const App = () => {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="container">
        <Route path="/" component={Main} />
      </div>
    </BrowserRouter>
  )
}

export default App;
