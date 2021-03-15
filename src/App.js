import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./pages/Home";
import AllGenres from "./pages/AllGenres";
import Favourite from "./pages/Favourite";
import RandomMovie from "./pages/RandomMovie";
import SingleMovie from "./pages/SingleMovie";

const App = () => {
  return (
    <div className="background">
      <div className="container-xxl px-5">
        <Router>
          <Menu />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/all-genres">
              <AllGenres />
            </Route>
            <Route path="/favourite">
              <Favourite />
            </Route>
            <Route path="/random-movie">
              <RandomMovie />
            </Route>
            <Route path="/movie/:id">
              <SingleMovie />
            </Route>
            {/* <Route path="/*">
          <Error />
        </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
