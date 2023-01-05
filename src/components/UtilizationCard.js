import React from "react";
import { Box, Text, Heading, Meter, Image, Button } from "grommet";
import { StatusBadge, Avatar } from "../components";

import { Mail, CircleInformation } from "grommet-icons"

export const UtilizationCard = ({ data, url, gridArea, ...rest }) => (
  <Box
    direction="column"
    justify="between"
    gap="small"
    pad="medium"
    background="black"
    round="small"
    className="animate__animated animate__fadeInUp animate__fast"
    style={{ marginBottom: 10 }}
  >
    <Box gap="small">
      {/* pic */}
      <Box
        height="small"
        width="small"
        round="small"
      >
        <Image style={{ borderRadius: 15 }} fit="cover" alt={url} src={data.img || "ppl/placeholder.jpg"} />
      </Box>
      <Box gap="xsmall">
        <Heading level="2" margin="none" size="small">
          {data.name}
        </Heading>
        <Text color="gray" size="small">
          {data.title}
        </Text>
        {/* <Text color="light-4" size="small">
          {data.major}
        </Text> */}
        {data.contact && <Button secondary href={data.contact} target="_blank">{data.name.split(" ").length == 2 ? <Mail color="brand" /> : <CircleInformation color="brand" />}</Button>}
      </Box>
    </Box>
  </Box>
);
