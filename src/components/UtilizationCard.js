import React from "react";
import { Box, Text, Heading, Meter, Image, Button } from "grommet";
import { StatusBadge, Avatar } from "../components";

import { Mail } from "grommet-icons"

export const UtilizationCard = ({ data, url, ...rest }) => (
  <Box
    direction="row"
    justify="between"
    gap="large"
    pad="medium"
    background="black"
    round="small"
    className="animate__animated animate__zoomIn"
    style={{ marginBottom: 10, }}
  >
    <Box gap="large">
      <Box gap="xsmall">
        <Heading level="2" margin="none" size="small">
          {data.name}
        </Heading>
        <Text color="gray" size="small">
          {data.title}
        </Text>
        <Text color="light-4" size="small">
          {data.major}
        </Text>
        {data.contact && <Button secondary href={data.contact} target="_blank"><Mail/></Button>} 
      </Box>
    </Box>
    {/* pic */}
    <Box
      height="small"
      width="small"
      round="small"
    >
      <Image style={{ borderRadius: 15}} fit="cover" src={data.img} />
    </Box>
  </Box>
);
