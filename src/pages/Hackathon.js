import React from "react";
import { Box, Heading, FormField, Button, Paragraph, TextInput, TextArea, Form, Image } from "grommet";
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
            <div className="card" style={{ background: "#02ff9c" }}>
                {/* <Box
                    round="small" width="large"
                    height="medium" >
                    <Image style={{ borderRadius: 5 }} fit="cover" alt="wayne hacks banner" src="https://showcase.zavaar.net/pics/whacks.png" />
                </Box> */}
                <img src="https://showcase.zavaar.net/pics/whacks.png" className="img-fluid" alt="wayne hacks banner" />
                <div className="container-fluid mt-2">
                    <div className="btn-group w-100">
                        <a target="_blank" href="https://waynehacks.com" className="btn btn-outline-success">More info</a>
                        <a target="_blank" href="https://waynehacks.devpost.com" className="btn btn-outline-success">Devpost</a>
                    </div>
                </div>
                <div className="card-body">
                    WayneHacks is a 48-hour virtual hackathon hosted by
                    Wayne State University. Hackers have 48 hours to complete a project related to the theme given at the opening ceremony.
                    WayneHacks also hosts workshops and two gaming tournaments during the event! $5000 in prizes are given out at the end to the best hacks.
                    <strong> For our Winter 2023 event, we had over 100 registrants, 50 active participants, and 16 project submissions.</strong>
                </div>
            </div>
        </Box>
    );
}