import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "./pages/LandingPage";
import BusinessPublic from "./pages/BusinessPublic";
import BusinessOwner from "./pages/BusinessOwner";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";
import SearchResults from "./pages/SearchResults";
import "./App.css";

const App = () => (
  <Router>
    <div>
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route exact path="/search-results" component={SearchResults} />
        {/* <Route path="/search-results" component={SearchResults} /> */}
        <Route exact path="/business-public/:id" component={BusinessPublic} />
        <Route exact path="/business-owner/:id" component={BusinessOwner} />
        {/* <Route exact path="/search-results/:id" component={SearchResults} /> */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
