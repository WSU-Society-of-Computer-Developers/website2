import React from "react";
import { pages } from "../data";
import {
  Anchor,
  Box,
  Menu,
  ResponsiveContext,
  Text
} from "grommet";
import { Menu as MenuIcon } from "grommet-icons";
// import { UserMenu } from ".";
// import { Avatar } from "./Avatar";
export const AppHeader = ({ appName, open }) => (
  <Box
    flex={false}
    tag="header"
    direction="row"
    background="black"
    align="center"
    justify="between"
    responsive={false}
  >
    <Box
      pad={{ horizontal: "medium", vertical: "small" }}
      responsive={false}
      direction="row"
      align="center"
      gap="small"
    >
      {/* <Avatar name="logo" url="scd_logo.png" /> */}
      <a href="#/">
        <img src="scd_logo.png" alt="SCD Logo" width={30} height={30} />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://wayne.edu/">
        <img width={29} alt="WSU Logo" height={26} src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Wayne_State_Warriors_primary_logo.svg/1200px-Wayne_State_Warriors_primary_logo.svg.png" />
      </a>
      <Text className="title" style={{ fontSize: 30 }}>{appName}</Text>
    </Box>
    <div style={{ fontFamily: "Blinker" }}>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === "small" ? (
            <Menu
              dropAlign={{ right: "right", top: "top" }}
              icon={<MenuIcon color="focus" />}
              items={pages.map(([label, href]) => { return { label, href } })}
            />
          ) : (
            <Box
              margin={{ left: "medium" }}
              round="xsmall"
              background={{ opacity: "weak" }}
              direction="row"
              align="center"
              pad={{ horizontal: "small" }}
            >
              {pages.map(([label, href]) => <Anchor href={href} label={label} margin="small" />)}
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </div>
  </Box>
);
