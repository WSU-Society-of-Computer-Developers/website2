import { Box, Main } from "grommet";
import Markdown from "../components/Markdown";
import React from "react";
import { socials } from "../data";

const info = `
# How do I join?

Joining SCD is easy!

1. **Go to our [Get Involved](${socials.GetInvolved}) page and sign in.**

![step1](join/1.png)

2. **Click on the "Join" button.**

![step1](join/2.png)

3. After your membership gets confirmed on our end, you will be added to the mailing list and receive an email with a link to our WhatsApp and Discord.

This is where we communicate and share information about upcoming events and opportunities.
__The confirmation process may take up to a week__. If it takes any longer,
please reach out to us via [email](mailto:${socials.Email}).
`;

export default function Join() {
  return (
    <div className="flex flex-col justify-center items-center animate__animated animate__fadeInDown animate__fast">
      <Box
        gridArea="main"
        className="md:w-3/4 w-full"
        align="center"
        gap="small"
        pad="small"
      >
        <Box flex={false} direction="row-responsive" wrap>
          <Box gap="large" flex="grow" margin="medium">
            <Main pad="large" className="text-white bg-[#000]">
              <Markdown>{info}</Markdown>
            </Main>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
