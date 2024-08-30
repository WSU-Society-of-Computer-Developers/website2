import React from "react";
import { Box, Heading, Image, Paragraph, Carousel } from "grommet";
import { images } from "../data";
import Markdown from "../components/Markdown";

export default function Gallery() {
  const [active, setActive] = React.useState(0);
  return (
    <Box
      flex
      overflow="auto"
      className="animate__animated animate__fadeInDown animate__fast"
      align="center"
      gap="small"
      pad="small"
      style={{ color: "whitesmoke" }}
    >
      <Heading className="title">Gallery</Heading>
      <Box height="medium" width="large" overflow="hidden">
        <Carousel onChild={setActive} play={6000} fill>
          {images.map(({ img, caption }) => (
            <Image
              onClick={() => {
                window.open(img);
              }}
              key={caption}
              alt={caption}
              className="cursor-zoom-in rounded-lg drop-shadow-xl"
              fit="contain"
              src={img}
            />
          ))}
        </Carousel>
        <Paragraph alignSelf="center">
          <Markdown>{images[active].caption}</Markdown>
        </Paragraph>
      </Box>
    </Box>
  );
}
