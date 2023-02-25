import React from "react";
import { Box, Heading, Button} from "grommet";
import { socials } from "../data";
// import Markdown from 'markdown-to-jsx/dist/index.js';
import YouTubeEmbed from "../components/YouTubeEmbed";
import { Youtube } from "grommet-icons";

const Video = ({ children, id, title }) => <Box width="100%" align="center" gap="small" pad="small">
    <Heading style={{ fontSize: 20, fontFamily: "Lato" }}>{title}</Heading>
    <YouTubeEmbed id={id} />
</Box>

export default function Workshops() {
    return (
        <Box flex overflow="auto" className="animate__animated animate__fadeInDown animate__fast"
            align="center" gap="small" pad="small" style={{ color: "whitesmoke", minHeight: "75%" }}>
            <Heading className="title">Recordings Playlist</Heading>
            {/* {videos.map((obj) => <Video {...obj} />)} */}
            <Video id="videoseries?list=PLMdbXAKJy69Qg4gb5o1XqV-a51ovCwmpv" />
            <a target="_blank" rel="noopener noreferrer" href={socials.YouTube}>
                <Button primary label={<Youtube color="focus" />} />
            </a>
        </Box>
    );
}