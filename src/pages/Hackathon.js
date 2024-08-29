import React from "react";
import {
  Box /* Heading, FormField, Button, Paragraph, TextInput, TextArea, Form, Image */,
} from "grommet";
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

export default function Hackathon() {
  return (
    <div className="flex flex-col justify-center items-center">
      <Box
        flex
        overflow="auto"
        className="animate__animated animate__fadeInDown animate__fast md:w-full lg:w-1/2"
        align="center"
        gap="small"
        pad="small"
        style={{ color: "whitesmoke" }}
      >
        <div className="card bg-[#f0f4ec]">
          {/* <Box
                    round="small" width="large"
                    height="medium" >
                    <Image style={{ borderRadius: 5 }} fit="cover" alt="wayne hacks banner" src="https://showcase.zavaar.net/pics/whacks.png" />
                </Box> */}
          <img
            src="whacks3_banner.png"
            className="img-fluid"
            alt="wayne hacks banner"
          />
          <div className="container-fluid mt-2">
            <p className="text-center animate-pulse">January 2025</p>
            <a
              href="https://waynehacks.com/login?signup=true"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn font-bold btn-success w-full hover:py-4 transition-all">
                Sign Up
              </button>
            </a>
          </div>
          <div className="card-body">
            <a
              href="https://waynehacks.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              WayneHacks
            </a>{" "}
            is a 24-hour in-person Hackathon at Wayne State University. All
            majors and skill levels are welcome with teams up to four people.
            Prizes are awarded to the best projects.{" "}
            <strong>Visit previous WayneHacks submissions:</strong>
            <div className="btn-group w-100">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://waynehacks.devpost.com"
                className="btn btn-outline-success"
              >
                WayneHacks
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://waynehacks-2.devpost.com"
                className="btn btn-outline-success"
              >
                WayneHacks 2
              </a>
            </div>
          </div>
        </div>
      </Box>
    </div>
  );
}
