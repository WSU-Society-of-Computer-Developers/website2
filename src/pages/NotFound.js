// import { org, socials } from "../data";
import {
    Box,
    Button,
    Main,
    Heading,
    Image,
} from "grommet";
import React from "react";

export default function NotFound() {
    return <Box gridArea="main" style={{ textAlign: "center" }} flex overflow="auto" align="center" gap="small" pad="small">

        <Box flex={false} direction="row-responsive" wrap>
            <Box gap="large" flex="grow" margin="medium">
                <Main pad="large" style={{ color: "whitesmoke" }}>
                    {/* index home logo */}
                    <Box height="small" alignSelf="center" className="animate__animated animate__fadeIn" width="small">
                        <Image fit="contain" src="/scd_logo.png" />
                    </Box>
                    <Box style={{ overflow: "hidden" }} alignSelf="center" align="center">
                        <Heading alignSelf="center" align="center" level={1} className="title">404 - Not Found</Heading>
                        <Box alignSelf="center" align="center">
                                <Button style={{ width: "100%" }} primary label="Home" href="/" />
                            </Box>
                    </Box>
                </Main>
            </Box>

        </Box>
    </Box>

}