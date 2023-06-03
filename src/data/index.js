import Gallery from "./builders/gallery"
import Team from "./builders/team"

export const org = {
  fullName: "Society of Computer Developers",
  shortName: "SCD",
  // NOTE: preamble supports markdown
  preamble: `Established in Fall 2021 as [Wayne State](https://wayne.edu)'s only Computer Science organization, SCD is focused on creating opportunities for students interested in coding and development. We aim to provide a community of peers that support one another in coding, resume building, networking, and developing new skills. You don't have to be a CS major or know anything about CS to join!`,
  location: "Wayne State University - Detroit, MI",
  "url": "https://getinvolved.wayne.edu/organization/scd"
}

export const socials = {
  "GetInvolved": "https://getinvolved.wayne.edu/organization/scd",
  "Email": "mailto:waynestatescd@gmail.com",
  "Instagram": "https://www.instagram.com/scd_wsu/",
  "Facebook": "https://www.facebook.com/scdwsu",
  "Twitter": "https://twitter.com/scd_wsu",
  "GitHub": "https://github.com/WSU-Society-of-Computer-Developers",
  "LinkedIn": "https://www.linkedin.com/company/society-of-computer-developers/",
  "YouTube": "https://www.youtube.com/channel/UCAdfexlccMiFANIx6WE4CrQ"
}

// SCHEMA:
//   pages => [page => [label, location]]
export const pages = [
  ["Home", "#/"],
  ["Team", "#/team"],
  ["Project", "#/project"],
  ["Donate", "#/donate"],
  ["Events", "#/events"],
  ["Recordings", "#/recordings"],
  ["Hackathon", "#/compete"],
  ["Gallery", "#/gallery"],
  ["Contact", "#/contact"],
]

/** @type {import("./builders/gallery")} */
// FYI -> Gallery.addSlide(img: string, caption: string): Gallery
export const images = new Gallery()
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/f0eaec97-9199-4aff-279a-08dab6692024/1500.jpg",
    "SCD at Festifall")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/5ec0e5bf-afdc-4a53-dd1d-08dabb5f3f2a/600.jpg",
    "General Body Meetings (1/3)")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/63def811-6840-4606-2792-08dab6692024/600.jpg",
    "General Body Meetings (2/3)")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/aee7b032-28ee-4514-dd13-08dabb5f3f2a/600.jpg",
    "General Body Meetings (3/3)")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/07751377-b95c-4dbd-dd1b-08dabb5f3f2a/600.jpg",
    "Game Night (1/3)")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/c85641fe-4228-481f-278d-08dab6692024/600.jpg",
    "Game Night (2/3)")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/bcc1fc69-b8e4-4712-278c-08dab6692024/600.jpg",
    "Game Night (3/3)")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/6897c3ee-f62b-4279-dd1f-08dabb5f3f2a/600.jpg",
    "1st place hack at the SCD Winter 2022 Virtual Hackathon")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/c58ef982-d138-427e-dd20-08dabb5f3f2a/600.jpg",
    "2nd place hack at the SCD Winter 2022 Hackathon ")
  .addSlide("https://se-images-blob.campuslabs.com/documents/204/07cb1bd5-d002-4da2-dd22-08dabb5f3f2a/600.jpg",
    "3rd place hack at the SCD Winter 2022 Hackathon")
  .getSlides()


/** @type {import("./builders/team")} */
// @type Team.addMember(name: string, title: string, contact: string, img: string | undefined): Team
export const teamMembers = new Team()
  .addMember("Zavaar Shah", "President", "mailto:zavaar.shah@wayne.edu", "ppl/Zavaar_Shah.jpg")
  .addMember("Cayden Koweck", "Vice President", "mailto:hd6247@wayne.edu", "ppl/Cayden_Koweck.jpg")
  .addMember("Nini Ola", "Secretary", "mailto:hd9510@wayne.edu", "ppl/Nini_Ola.jpg")
  .addMember("Yasmin Shah", "Event Coordinator", "mailto:hh4891@wayne.edu", "ppl/Yasmin_Shah.jpg")
  .getMembers()


// its in here bc spell check is here 
export const projectSummary = `
# What is it?

The summer project aims to engage students in creating and deploying a web-based application within a two-month time frame.
Students will work collaboratively in teams, taking on different roles and responsibilities to incrementally develop the application from start to finish, using the Agile methodology.

Throughout the project, students will gain hands-on experience in web development, enhancing their programming skills and expanding their 
technical knowledge. They will have the opportunity to work on **frontend** and/or **backend** development, **database management**, **system (architecture) design**, **CI/CD pipelines**, 
and also non-technical roles such as **management**, **marketing**, **branding**, and **QA/UX**. The project also focuses on fostering teamwork,
collaboration, and project management skills as students work together to overcome challenges and meet project milestones.

By participating in this summer project, students will have the chance to build their portfolios and resumes with a real-world web
application, showcasing their practical skills and commitment to learning ubiquitous and intricate systems. 
They will also benefit from networking opportunities, connecting with peers, mentors, and faculty involved in the project. Additionally, the project will provide students with exposure to industry practices and development methodologies, preparing them for future careers in related fields.

<center>
<strong>
It may seem a bit overwhelming to realize what you're getting yourself into, but don't worry! You don't have to be fully committed to join.
The goal of this project is to provide you with a valuable learning experience, skill development, personal growth, and the opportunity to
work communally on a meaningful project that can have a lasting impact on your academic and professional journeys.
</strong>
</center>

______

# Who can participate?

### <u>Everyone is welcome!</u>

Whether or not you are technical, or you wish to just observe, anyone can join.
Here are the teams available and their responsibilities: 
*(note: you can pick and choose which teams you wish to be apart of and can also be in multiple teams at once)*

<details>
<summary>Technical Roles</summary>
<br>
* Frontend/UI 
  *  Designing user interfaces using popular web frameworks
  * Work w/ backend team to integrate each other's functionalities
* Backend/API/Database (BaaS)
  *  Create meaningful relationships between data
  * Manage user-authentication
  * Build and integrate RESTFul API 
  * Work w/ frontend team to integrate each other's functionalities
* System Architect
  * Suggest and discuss the application of different system design paradigms
  * Blueprint the architecture our entire system
* DevOps
  *  Product lifecycle management
  * Manage automation tasks for CI/CD pipelines
  * Ensure IT infrastructure/environment is working

</details>

<details>
<summary>Non-technical Roles</summary>
<br>
* Management
  * Run design sprints and get feedback
  * Research and Benchmark designs with Heuristic Analysis
  * Apply timely Usability testing
  * Lead stand-up meetings
  * Ensure all teams meet project milestones by deadlines
* Marketing/Branding
  * Create unique color palette for the UI
  * Create vector graphics/visuals
* QA/UX Tester
  * Ensure features work as intended before any sort of major deployment or merge

</details>

______

# When do we meet?

* We will be gauging everyone's availability through the Discord
* Short stand-up (Agile) meetings will be arranged for all teams to attend and discuss progress 1-2 times a week 
(this will most likely be changed based on the project's popularity)
* The technical lead will act as a CTO and will host frequent learning sessions for all teams. 
The learning sessions will provide team members the tools/ideas needed to accomplish their given tasks

# Interested?

Join our [Discord](https://discord.gg/ZgdN2JUJ6k) and join a team!

`