import React from "react";
import { pages } from "../data";
import {
  Anchor,
  Box,
  DropButton,
  Menu,
  ResponsiveContext,
  Text
} from "grommet";
import { Down } from "grommet-icons";
import { UserMenu } from ".";
import { Avatar } from "./Avatar";
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
    <a href="/">
      <Box
        pad={{ horizontal: "medium", vertical: "small" }}
        responsive={false}
        direction="row"
        align="center"
        gap="small"
      >
        <Text className="title" style={{ fontSize: 30 }}>{appName}</Text>
        <Avatar url="/scd_logo.png" />
      </Box>
    </a>
    <div style={{ fontFamily: "Blinker" }}>
      <ResponsiveContext.Consumer>
        {responsive =>
          responsive === "small" ? (
            <Menu
              dropAlign={{ right: "right", top: "top" }}
              label="More"
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
              {pages.map(([label, href]) => { return <Anchor href={href} label={label} margin="small" /> })}
            </Box>
          )
        }
      </ResponsiveContext.Consumer>
    </div>
  </Box>
);
