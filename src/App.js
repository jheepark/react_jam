import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import BlogMain from "./components/Blog/BlogMain";

const App = () => (
  <MainWrapper>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route
          path="/Blog/:blogId" component={BlogMain} />
      </Switch>
    </BrowserRouter>
  </MainWrapper>
);

export default App;
