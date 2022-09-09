import { org } from "../data";
import {
    Box,
    Button,
    Main,
    Heading,
    Paragraph,
    WorldMap,
    Image,
    Markdown
} from "grommet";

import React from "react";
export default function Home() {
    return <Box gridArea="main" style={{ textAlign: "center" }} flex overflow="auto" align="center" gap="small" pad="small">

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

}