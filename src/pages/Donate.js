import React from "react";
import { Box, Text, Heading, Image, Button, Paragraph } from "grommet";
import { StatusBadge, Avatar } from "../components";
import PaypalEmbed from "../components/PaypalEmbed";

export default function Donate() {
    return (
        <Box align="center" height="100%" gap="small" pad="small" className="animate__animated animate__fadeInDown animate__fast" style={{ color: "whitesmoke" }}>
            <Heading className="title">Donate</Heading>
            <a target="_blank" href="donoguide.pdf"><Button primary label="Get PDF Instructions"/></a>
            <iframe src="https://scribehow.com/embed/SCD_Donation_Guide__FjgiwL1EQbiYCxuPbWXV_g" width="640" height="640" allowfullscreen frameborder="0"></iframe>

            {/* <PaypalEmbed /> */}
        </Box>
    )
}