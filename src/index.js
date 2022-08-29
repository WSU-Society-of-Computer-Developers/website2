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
  Grid
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

class AppBody extends Component {
  static contextType = ResponsiveContext;

  render() {
    return (
      <Grommet theme={theme} full>
        <div className="bg">
          <Box fill>
            <AppHeader
              appName={""}
              appIcon={<Menu />}
            />
            <Box flex overflow="auto" gap="medium" pad="medium">
              <Grid rows={['xxsmall', 'xsmall']} columns={['large', 'large']} gap="small">
              {/*  <Box
              flex={false}
              overflow="auto"
              round="large"
              background={{ color: "dark-5", opacity: "weak" }}
              direction="row"
              align="center"
              pad={{ horizontal: "medium", vertical: "small" }}
              margin={{ horizontal: "medium", top: "medium" }}
            >
              <Search color="brand" />
              <TextInput plain placeholder="Search Cluster" type="search" />
            </Box> */}
              <Box flex={false} direction="row" wrap>
                <Box gap="large" flex="grow" margin="medium">
                  <Main pad="large" style={{ color: "whitesmoke" }}>
                    <Heading level={1} className="title">{org.fullName}</Heading>
                    <Paragraph className="paragraph" color="light-6">{org.preamble}</Paragraph>
                  </Main>
                </Box>
                
                  <WorldMap
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
                  />
            

                {/*  <Box flex="grow" margin="medium">
                  <Hardware data={hardware} />
                </Box> */}

              </Box>
              </Grid>
            </Box>

            {/*  <Box
            flex={false}
            pad={{ vertical: "xsmall", left: "medium" }}
            responsive={false}
            background={{ color: "brand", dark: false }}
            direction="row"
            align="center"
            justify="between"
          >
            <Text color="light-1">5 Running Tasks</Text>
            <Button
              size="medium"
              label="Show Tasks"
              icon={<Menu color="white" />}
              reverse={true}
            />
          </Box> */}
          </Box>

        </div>
      </Grommet>
    );
  }
}
const App = () => (
  <Grommet theme={theme} full>
    <AppBody />
  </Grommet>
);
render(<App />, document.getElementById("root"));
