import React from "react";
import { Box, Text, Heading, Image, Button, Paragraph } from "grommet";
import { StatusBadge, Avatar } from "../components";
import PaypalEmbed from "../components/PaypalEmbed";


export default function Donate() {
    return (
        <Box align="center" height="100%" gap="small" pad="small" className="animate__animated animate__fadeInDown animate__fast" style={{ color: "whitesmoke" }}>
            <Heading className="title">Donate</Heading>
            <a target="_blank" href="donoguide.pdf"><Button primary label="Get PDF Instructions"/></a>
            <iframe style={{maxWidth: "100%", minWidth: "50%", borderRadius: 15}} width="90%" height="500" src="donoguide.html"></iframe>
            {/* <PaypalEmbed /> */}
        </Box>
    )
}