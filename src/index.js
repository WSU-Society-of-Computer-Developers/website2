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
  HashRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Donate from "./pages/Donate";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import Gallery from "./pages/Gallery";
import { pages } from "./data";
import { Footer } from "./components/Footer";
import Hackathon from "./pages/Hackathon";


// NOTE: **PAGE COMPONENTS MUST MATCH ORDER OF 'pages' VARIABLE IN './data' 
const pageComps = [
  <Home />,
  <Team />,
  <Donate />,
  <Events />,
  <Hackathon />,
  <Gallery />,
  <Contact />
]

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
                  {pages.map(
                    ([label, location], index) =>
                      <Router exact path={'/' + location.split('/').pop()}>
                        {pageComps[index]}
                      </Router>
                  )}
                  <Route path="*">
                    <NotFound />
                  </Route>
                </Switch>
              </div>
              <Footer />
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
