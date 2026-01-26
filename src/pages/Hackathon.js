import React from "react";
import {
  Box,
  Button,
  Heading,
  Paragraph,
  Image,
  Text,
  Anchor,
} from "grommet";
import { FormNextLink } from "grommet-icons";

export default function Hackathon() {
  return (
    <Box
      gridArea="main"
      flex
      overflow="auto"
      align="center"
      gap="medium"
      pad="large"
      style={{ textAlign: "center" }}
    >
      <Box
        animation="fadeIn"
        width="large"
        align="center"
        gap="medium"
        style={{ color: "whitesmoke" }}
      >
        <Box
          height="medium"
          width="100%"
          round="small"
          overflow="hidden"
          elevation="medium" 
          className="animate__animated animate__fadeInDown"
        >
          <Image
            fit="cover"
            src="whacks4.png"
            alt="WayneHacks 4 Banner"
          />
        </Box>

        <Box align="center" gap="small" className="animate__animated animate__fadeInUp animate__delay-1s">
          <Heading level={2} margin="none" size="large">
            WayneHacks 4
          </Heading>
          <Text size="large" color="accent-1" weight="bold">
            Winter 2026 • Wayne State University
          </Text>
        </Box>

        <Paragraph
          size="large"
          textAlign="center"
          color="light-6"
          className="animate__animated animate__fadeInUp animate__delay-1s"
        >
          WayneHacks is a 24-hour in-person hackathon. Whether you are a beginner
          or an expert, bring a team of up to four to build, learn, and compete
          for prizes.
        </Paragraph>

        <Box
          margin={{ top: "medium", bottom: "medium" }}
          className="animate__animated animate__pulse animate__infinite animate__slower"
        >
          <Button
            primary
            size="large"
            label="Register Now"
            href="https://waynehacks.com/login?signup=true"
            target="_blank"
            style={{ padding: "12px 32px", fontSize: "1.2rem" }}
          />
        </Box>

        <Box
          direction="row-responsive"
          gap="medium"
          align="center"
          margin={{ top: "large" }}
          border={{ side: "top", color: "white", size: "small" }}
          pad={{ top: "medium" }}
        >
          <Text size="small" color="light-4">Previous Events:</Text>
          <Box direction="row" gap="small">
            <Anchor
              href="https://waynehacks.devpost.com"
              target="_blank"
              label="WH1"
              icon={<FormNextLink size="small" />}
              reverse
              color="accent-2"
            />
            <Anchor
              href="https://waynehacks-2.devpost.com"
              target="_blank"
              label="WH2"
              icon={<FormNextLink size="small" />}
              reverse
              color="accent-2"
            />
            <Anchor
              href="https://waynehacks-3.devpost.com"
              target="_blank"
              label="WH3"
              icon={<FormNextLink size="small" />}
              reverse
              color="accent-2"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}