import { Gallery } from "./builders"

export const org = {
  fullName: "Society of Computer Developers",
  shortName: "SCD",
  // NOTE: preamble supports markdown
  preamble: `Established in Fall 2021 as [Wayne State](https://wayne.edu)'s only Computer Science organization, SCD is focused on creating opportunities for students interested in coding and development. We aim to provide a community of peers that support one another in coding, resume building, networking, and developing new skills. You don’t have to be a CS major or know anything about CS to join!`,
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
  ["Compete", "#/compete"],
  ["Gallery", "#/gallery"],
  ["Contact", "#/contact"],
]

// Gallery Schema:
/* 
  images => [
    image => {
      img: String // url for image (relative or absolute)
      caption: String // **MARKDOWN SUPPORTED** caption displayed under the image 
    }
  ]
*/
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

// on /workshops page
// @deprecated
/* videos = [ 
  video => { 
      title: String // text to be shown above the video 
      id: String // YouTube video id 
      children?: ReactElement<any> 
    }
  ] 
*/
// export const videos = [
//   { title: "React Web Development", id: "S7wWg11tZxM"},
//   { title: "Docker & Containerization", id: "MrE1uvzuJW8" },
//   { title: "Website Portfolio Project (Part 1)", id: "rCPJsQj-POI"}
// ]


// Schema:
/* 
members => [
  member => {
    name: String, 
    major: String, // Extra information??/
    contact?: String | undefined, // this is an href 
    img: String // URL for image
  }
]
*/
// TODO: change "major" property to represent something else
export const teamMembers = [
  {
    name: "Kelly Whitlock",
    major: "Computer Science",
    title: "President",
    contact: "mailto:fr6097@wayne.edu", // THIS IS AN HREF
    img: "ppl/Kelly_Whitlock.jpg"
  },
  /*   {
      name: "Mohammed Ali",
      major: "Computer Science",
      title: "Vice President",
      contact: "mailto:fj2851@wayne.edu",
      img: "ppl/Mohammed_Ali.jpg"
    }, */ // RIP
  {
    name: "Zavaar Shah",
    major: "Computer Science",
    title: "Vice President",
    contact: "mailto:hh3509@wayne.edu",
    img: "ppl/Zavaar_Shah.jpg"
  },
  {
    name: "Cayden Koweck",
    major: "Computer Science",
    title: "Secretary",
    contact: "mailto:hd6247@wayne.edu",
    img: "ppl/Cayden_Koweck.jpg"
  },
  {
    name: "Aakash Mukhi",
    major: "Computer Science",
    title: "Data Lead",
    contact: "mailto:fp8515@wayne.edu",
    img: "ppl/Aakash_Mukhi.png"
  },
  {
    name: "Oke Amuwha",
    major: "Computer Science",
    title: "Web Lead",
    contact: "mailto:gv4281@wayne.edu",
    img: "ppl/Oke_Amuwha.jpg"
  },
  {
    name: "Yasmin Shah",
    title: "Event Coordinator",
    contact: "mailto:hh4891@wayne.edu",
    img: "ppl/Yasmin_Shah.jpg"
  },
  {
    name: "Nini Ola",
    title: "Social Media Coordinator",
    contact: "mailto:hd9510@wayne.edu",
    // img: "ppl/Nini_Ola.jpg"
  },
  {
    name: "Hani Kandalaft",
    // major: "???",
    title: "Student Advisor",
    contact: "mailto:gv5771@wayne.edu",
    img: "ppl/Hani_Kandalaft.png"
  },
  {
    name: "Yousra Zouani",
    // major: "???",
    title: "Treasurer",
    contact: "mailto:gv4281@wayne.edu",
    img: "ppl/Yousra_Zouani.jpg"
  },
]