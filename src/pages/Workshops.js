import React from "react";
import { Box, Heading, FormField, Button, Paragraph, TextInput, TextArea, Form } from "grommet";
import { socials } from "../data";
import Markdown from 'markdown-to-jsx/dist/index.js';

export default function Workshops() {
    return (
        <Box flex overflow="auto" className="animate__animated animate__fadeInDown animate__fast" width="100%" align="center" gap="small" pad="small" style={{ color: "whitesmoke" }}>
            <Heading className="title">SCD Hackathon Team</Heading>
            <Paragraph className="paragraph" color="light-6" alignSelf="center" align="center" style={{width: "73vw", minWidth: "50vw"}}>
                <Markdown>
                    {msg}
                </Markdown>
            <a target="_blank" href="https://forms.gle/SDSm6hfvinWadS1s8"><Button primary label="Team Form"/></a>
            </Paragraph>
            <Paragraph className="paragraph">
                <Markdown>
                    {futureEvents}
                </Markdown>
            </Paragraph>            
        </Box>
    );
}