import React from "react";
import { Box, Text, Heading, Image, Button } from "grommet";
// import { StatusBadge, Avatar } from "../components";

import { Mail, CircleInformation } from "grommet-icons";

export const UtilizationCard = ({ data, url, gridArea, ...rest }) => {
  // IF THE NAME IS TWO WORDS, WE ASSUME ITS A CARD FOR A PERSON AND IF ITS DESCRIPTION IS LESS THAN 4 WORDS, THE SAME APPLIES
  const titleWords = data.name.split(" ").length;
  const isTeamCard = titleWords === 2;
  return (
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
          round="small"
          width={isTeamCard ? "medium" : null}
          height={isTeamCard ? "medium" : null}
          direction="row"
        >
          <Image
            style={{ borderRadius: 5 }}
            fit="cover"
            alt={data.name}
            src={data.img || "ppl/placeholder.jpg"}
          />
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
          {data.contact && (
            <Button secondary href={data.contact} target="_blank">
              {isTeamCard ? (
                <Mail color="brand" />
              ) : (
                <CircleInformation color="brand" />
              )}
            </Button>
          )}
        </Box>
      </Box>
    </Box>
  );
};
