import { org, pages, socials } from "../data";
import {
  Box,
  Button,
  Main,
  Heading,
  Paragraph,
  // WorldMap,
  Image,
  Nav,
} from "grommet";
import React from "react";
import IconHandler from "../components/IconHandler";
import Markdown from "../components/Markdown";

export default function Home() {
  return (
    <Box
      gridArea="main"
      style={{ textAlign: "center" }}
      flex
      overflow="auto"
      align="center"
      gap="small"
      pad="small"
    >
      <Box flex="grow" direction="row-responsive" wrap>
        <Main pad="large" style={{ color: "whitesmoke" }} responsive>
          {/* index home logo */}
          <Box
            height="small"
            alignSelf="center"
            className="animate__animated animate__fadeIn animate__slower"
            width="small"
          >
            <Image alt="SCD Logo" fit="contain" src="scd_logo.png" />
          </Box>
          <Box style={{ overflow: "hidden" }} alignSelf="center" align="center">
            <div
              className="animate__animated animate__fadeInUp animate__delay-1s"
              align="center"
            >
              <Heading
                alignSelf="center"
                align="center"
                level={1}
                style={{
                  marginTop: 25,
                  marginBottom: 10,
                  maxWidth: "300",
                  fontSize: "clamp(30px, 5.5vw, 120px)",
                  whiteSpace: "pre",
                }}
                className="title"
              >
                {org.fullName}
              </Heading>
              <Paragraph
                className="paragraph"
                color="light-6"
                alignSelf="center"
                align="center"
                style={{ width: "73vw", minWidth: "50vw" }}
              >
                <Markdown>{org.preamble}</Markdown>
              </Paragraph>
              <Box alignSelf="center" align="center">
                <Button
                  style={{ width: "100%" }}
                  primary
                  label="Join Today"
                  className="mt-4"
                  href={pages.find((page) => page[0] === "Join")[1]}
                />
              </Box>
              <Nav
                alignSelf="center"
                direction="row"
                justify="center"
                background="none"
                pad="small"
                flex
              >
                <IconHandler
                  name="Email"
                  url={socials.Email}
                  icon="fa-solid fa-envelope"
                />
                <IconHandler
                  name="LinkedIn"
                  url={socials.LinkedIn}
                  icon="fa-brands fa-linkedin"
                />
                <IconHandler
                  name="Instagram"
                  url={socials.Instagram}
                  icon="fa-brands fa-instagram"
                />
                <IconHandler
                  name="Twitter"
                  url={socials.Twitter}
                  icon="fa-brands fa-twitter-square"
                />
                <IconHandler
                  name="Facebook"
                  url={socials.Facebook}
                  icon="fa-brands fa-square-facebook"
                />
                <IconHandler
                  name="GitHub"
                  url={socials.GitHub}
                  icon="fa-brands fa-github"
                />
              </Nav>
            </div>
          </Box>
        </Main>
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
  );
}
