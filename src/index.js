import React, { Component } from "react";
import { render } from "react-dom";
import {
  Box,
  Button,
  Grommet,
  Text,
  TextInput,
  ResponsiveContext,
  Main,
  Heading,
  Paragraph,
  WorldMap,
  Image,
  Grid,
  Markdown
} from "grommet";
import { Search, Menu } from "grommet-icons";
import { theme } from "./theme";
import "./index.css"
import {
  AppHeader,
  Hardware,
  Notification,
  UtilizationCard,
  VirtualMachinesCard
} from "./components";
import { hardware, org } from "./data";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

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
              <Switch>
                <Route path="/">
                  <Box gridArea="main" style={{ textAlign: "center" }} flex overflow="auto" align="center" gap="small" pad="small">

                    <Box flex={false} direction="row-responsive" wrap>
                      <Box gap="large" flex="grow" margin="medium">
                        <Main pad="large" style={{ color: "whitesmoke" }}>
                          {/* index home logo */}
                          <Box height="small" alignSelf="center" className="animate__animated animate__fadeIn animate__slower" width="small">
                            <Image fit="contain" src="/scd_logo.png" />
                          </Box>
                          <Box style={{ overflow: "hidden" }} alignSelf="center" align="center">
                            <div className="animate__animated animate__fadeInUp animate__delay-1s" align="center" >
                              <Heading alignSelf="center" align="center" level={1} className="title">{org.fullName}</Heading>
                              <Paragraph className="paragraph" color="light-6" alignSelf="center" align="center"><Markdown>{org.preamble}</Markdown></Paragraph>
                              <Box alignSelf="center" align="center">
                                <Button style={{ width: "100%" }} primary label="Join Today" href={org.url} target="_blank" />
                              </Box>
                            </div>
                          </Box>
                        </Main>
                      </Box>

                      {/* <WorldMap
                    color="neutral-1"
                    continents={[
                      {
                        name: 'North America',
                        color: "accent-1",
                      },
                    ]}
                    places={[
                      {
                        name: 'Detroit, MI',
                        location: [42.3314, -83.0458,],
                        color: 'accent-2',
                        onClick: (name) => { window.location.href = "https://goo.gl/maps/CdJuxwcnEEmMwcD38" },
                      },
                    ]}
                    selectColor="accent-2"
                  /> */}

                    </Box>
                  </Box>
                </Route>
              </Switch>
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
