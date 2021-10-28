import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import {Page1} from "./Components/Page1"
import { Gobbleblog } from './Components/Gobbleblog';
import { Lingr } from './Components/Lingr';
import { Whatluck } from './Components/Whatluck';
import { MyWork } from './Components/MyWork';

export const App = () => {
  return (
    <div>
      <Router>
        <Switch>
        <Route exact path="/">
          <Page1 />
        </Route>
        <Route exact path="/work">
          <MyWork />
        </Route>
        <Route path="/work/whatluck">
          <Whatluck />
        </Route>
        <Route path="/work/lingr">
          <Lingr />
        </Route>
        <Route path="/work/gobbleblog">
          <Gobbleblog />
        </Route>        
      </Switch>

      </Router>
    </div>
  )
}
