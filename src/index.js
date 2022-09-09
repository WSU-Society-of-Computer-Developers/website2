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
                  <Router path="/team">
                    <Team />
                  </Router>
                  <Router path="/donate">
                    <Donate/>
                  </Router>
                  <Router path="/contact">
                    <Contact/>
                  </Router>
                  <Route path="/">
                    <Home />
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
