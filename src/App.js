import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Homepage from "./components/Homepage/Homepage";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import MainWrapper from "./components/MainWrapper/MainWrapper";
import BlogMain from "./components/Blog/BlogMain";

const App = () => (
  <MainWrapper>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/about" component={About} />
        <Route exact path="/projects" component={Projects} />
        <Route
          path="/Blog/:blogId" component={BlogMain} />
      </Switch>
    </BrowserRouter>
  </MainWrapper>
);

export default App;
