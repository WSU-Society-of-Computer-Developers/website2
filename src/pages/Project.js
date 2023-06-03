import React from 'react'
import { Box, Heading } from "grommet";
import Markdown from 'markdown-to-jsx/dist/index.js';
import { projectSummary } from '../data';

export default function Project() {
    return (
        <Box flex overflow="auto" className="animate__animated animate__fadeInDown animate__fast" align="center" gap="small" pad="small" style={{ color: "whitesmoke", marginLeft: 25, marginRight: 25 }}>
            <Heading className="title">2023 Summer Project</Heading>
            <Box style={{ backgroundColor: "#0a0a0a", padding: 25, borderRadius: 10 }}>
                <Markdown>
                    {projectSummary}
                </Markdown>
            </Box>
        </Box>
    )
}
