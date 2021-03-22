import React, { Component } from "react";
import "../src/App.css";
import { Redirect, Switch, Route, BrowserRouter } from "react-router-dom";
import LandingPage from "./components/Pages/LandingPage/LandingPage";
import BlogPage from "./components/Pages/BlogPage/BlogPage";
import PageNotFound from "./components/Pages/PageNotFound/PageNotFound";
import ScrollToTop from "./components/Molecules/ScrollToTop";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <Switch>
          <Route exact path="/blogpage" component={BlogPage} />
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/404" component={PageNotFound} />
          <Redirect to="/404" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
