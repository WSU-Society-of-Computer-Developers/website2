import React from "react";

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
    <Box
      pad={{ horizontal: "medium", vertical: "small" }}
      responsive={false}
      direction="row"
      align="center"
      gap="small"
    >
      <Text className="title" style={{ fontSize: 30 }}>{appName}</Text>
      <Avatar url="/scd_logo.png"/>
    </Box>
    <div style={{fontFamily: "Blinker"}}>
    <ResponsiveContext.Consumer>
      {responsive =>
        responsive === "small" ? (
          <Menu
            dropAlign={{ right: "right", top: "top" }}
            label="More"
            items={[
              { label: "One", href: "#" },
              { label: "two", href: "#" },
              { label: "Three", href: "#" }
            ]}
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
            <Anchor href="" label="One" margin="small" />
            <Anchor href="" label="Two" margin="small" />
            <Anchor href="" label="Three" margin="small" />
          </Box>
        )
      }
    </ResponsiveContext.Consumer>
    </div>
  </Box>
);
