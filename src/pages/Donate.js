import React from "react";
import { Box, Text, Heading, Image, Button, Paragraph } from "grommet";
import { StatusBadge, Avatar } from "../components";
import PaypalEmbed from "../components/PaypalEmbed";


export default function Donate() {
    return (
        <Box flex overflow="auto" align="center" gap="small" pad="small" className="animate__animated animate__fadeInDown animate__fast" style={{ color: "whitesmoke" }}>
            <Heading className="title">Why Donate?</Heading>
            <Paragraph> (( Donate to SCD Because...  )) </Paragraph>
            <Paragraph>((Benefits include...))</Paragraph>
            <PaypalEmbed />
        </Box>
    )
}