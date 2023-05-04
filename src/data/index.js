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
  .addMember("Kelley Whitlock", "President", "mailto:fr6097@wayne.edu", "ppl/Kelly_Whitlock.jpg")
  .addMember("Zavaar Shah", "Vice President", "mailto:hh3509@wayne.edu", "ppl/Zavaar_Shah.jpg")
  .addMember("Cayden Koweck", "Secretary", "mailto:hd6247@wayne.edu", "ppl/Cayden_Koweck.jpg")
  .addMember("Aakash Mukhi", "Data Lead", "mailto:fp8515@wayne.edu", "ppl/Aakash_Mukhi.png")
  .addMember("Yasmin Shah", "Event Coordinator", "mailto:hh4891@wayne.edu", "ppl/Yasmin_Shah.jpg")
  .addMember("Nini Ola", "Social Media Coordinator", "mailto:hd9510@wayne.edu", "ppl/Nini_Ola.jpg")
  .addMember("Hani Kandalaft", "Student Advisor", "mailto:gv5771@wayne.edu", "ppl/Hani_Kandalaft.png")
  .addMember("Yousra Zouani", "Treasurer", "mailto:gv4281@wayne.edu", "ppl/Yousra_Zouani.jpg")
  .getMembers()
