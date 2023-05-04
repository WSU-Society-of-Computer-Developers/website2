import React from "react";
import { Box, Heading, FormField, Button, Paragraph, TextInput, TextArea, Form } from "grommet";
/* import { socials } from "../data";
import Markdown from 'markdown-to-jsx/dist/index.js';
import { Redirect } from "react-router-dom"; */

/* const msg = `SCD will be attending and competing in many [MLH](https://mlh.io/) certified hackathon competitions this year! 
In these competitions, teams of up to 4 people have 24-48 hours to complete a project related to the given prompt. 
Prizes are given out throughout and after the competition ends for the best project. 
This is a great way to refine your technical skills and an opportunity to network with companies across Michigan!
We are looking for all kinds of developers, beginners to experts, so we can have a strong presence with multiple teams at each event. 
Don't be afraid if you are inexperienced, these are the best places to learn about development! 
Interested in competing and think you have what it takes? **Fill out the form below!**`

const futureEvents = `## We plan to compete in...
* [Spartahack](https://www.spartahack.com/) (MSU Hackathon - **Jan. 28-29**) 
* [MHacks](https://www.mhacks.org/) (U of M Hackathon - **Feb. 10-12**)
`
 */

// THIS SITE JUST REDIRECT TO WANYEHACKS.COM
export default function Hackathon() {
    return (
        <Box flex overflow="auto" className="animate__animated animate__fadeInDown animate__fast" width="100%" align="center" gap="small" pad="small" style={{ color: "whitesmoke" }}>
            <Heading className="title">WayneHacks</Heading>
            <Paragraph className="paragraph" color="light-6" alignSelf="center" align="center" style={{width: "73vw", minWidth: "50vw"}}>
            
            <a target="_blank" href="https://waynehacks.com"><Button primary label="Website"/></a>
            <a target="_blank" href="https://waynehacks.devpost.com"><Button primary label="Devpost"/></a>
            </Paragraph>
            <Paragraph className="paragraph">
  
            </Paragraph>  
        </Box>
    );
}