import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Main from "./main/Main"
import Card from "./card/Card"
import "./app.less"

const App = () => {
  const dispatch = useDispatch();

  return (
    <BrowserRouter>
      <div className="container">
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/card" component={Card} />
          <Redirect to="/" />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App;
