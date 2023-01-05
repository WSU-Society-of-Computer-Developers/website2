import React from "react";
import { Box, Heading, Image, Tip, Paragraph, TextInput, TextArea, Form, Carousel } from "grommet";
import { images } from "../data";
import Markdown from 'markdown-to-jsx/dist/index.js'; // solution by https://github.com/probablyup/markdown-to-jsx/issues/333#issuecomment-731148699

export default function Gallery() {
    const [active, setActive] = React.useState(0)
    return (
        <Box flex overflow="auto" className="animate__animated animate__fadeInDown animate__fast" align="center" gap="small" pad="small" style={{ color: "whitesmoke" }}>
            <Heading className="title">Gallery</Heading>
            <Box height="medium" width="large" overflow="hidden">
                <Carousel onChild={setActive} play={6000} fill>
                    {images.map(({ img, caption }) => <Image onClick={() => { window.open(img) }}
                        key={caption} alt={caption} fit="contain" src={img} />)}
                </Carousel>
                <Paragraph alignSelf="center"><Markdown>{images[active].caption}</Markdown></Paragraph>
            </Box>
        </Box>
    );
}