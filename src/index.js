import React, { Component } from "react";
import { render } from "react-dom";
import {
  Box,
  Grommet,
  ResponsiveContext
} from "grommet";
import { Search, Menu } from "grommet-icons";
import { theme } from "./theme";
import "./index.css"
import {
  AppHeader,
} from "./components";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";

class AppBody extends Component {
  static contextType = ResponsiveContext;

  render() {
    return (
      <Router>
        <Grommet theme={theme} full>
          <div className="bg">
            <Box fill>
              <AppHeader
                appName={""}
                appIcon={<Menu />}
              />
              {/*  MAIN CONTENT  */}
              <div style={{ overflowY: "scroll" }}>
                <Switch>
                  <Router exact path="/team">
                    <Team />
                  </Router>
                  <Router exact path="/donate">
                    <Donate/>
                  </Router>
                  <Router exact path="/contact">
                    <Contact/>
                  </Router>
                  <Router exact path="/events">
                    <Events/>
                  </Router>
                  <Route exact path="/">
                    <Home />
                  </Route>
                  <Route path="*">
                    <NotFound/>
                  </Route>
                </Switch>
              </div>
            </Box>
          </div>
        </Grommet>
      </Router>
    );
  }
}
const App = () => (
  <Grommet theme={theme} full>
    <AppBody />
  </Grommet>
);
render(<App />, document.getElementById("root"));
