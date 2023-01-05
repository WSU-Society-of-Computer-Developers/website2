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
  "GitHub": "https://github.com/WSU-Society-of-Computer-Developers"
}

// SCHEMA:
//   pages => [page => [label, location]]
export const pages = [
  ["Home", "#/"],
  ["Team", "#/team"],
  ["Donate", "#/donate"],
  ["Events", "#/events"],
  ["Workshops", "#/workshops"],
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
export const images = [
  { img: "//v2.grommet.io/assets/Wilderpeople_Ricky.jpg", caption: "This is a sample image." },
  { img: "//v2.grommet.io/assets/IMG_4245.jpg", caption: "[Markdown](https://www.markdownguide.org/) is supported" },
]


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