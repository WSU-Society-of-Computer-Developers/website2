export const org = {
  fullName: "Society of Computer Developers",
  shortName: "SCD",
  // NOTE: preamble supports markdown
  preamble: `Established in Fall 2021 as [Wayne State](https://wayne.edu)’s only Computer Science organization, SCD is focused on creating opportunities for students interested in coding and development. We aim to provide a community of peers that support one another in coding, resume building, networking, and developing new skills. You don’t have to be a CS major or know anything about CS to join!`,
  location: "Wayne State University - Detroit, MI",
  "url": "https://getinvolved.wayne.edu/organization/scd"
}

export const socials = {
  "GetInvolved": "https://getinvolved.wayne.edu/organization/scd",
  "Email": "mailto:waynestatescd@gmail.com",
  "Instagram": "https://www.instagram.com/scd_wsu/",
  "Facebook": "https://www.facebook.com/scdwsu",
  "Twitter": "https://twitter.com/scd_wsu"
}

// SCHEMA:
//   pages => [page => [label, location]]
export const pages = [
  ["Home", "/"],
  ["Team", "/team"],
  ["Donate", "/donate"],
  ["Gallery", "/gallery"],
  ["Contact Us", "/contact"]
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
// TODO: ADD TEAM EMAILS HERE
export const teamMembers = [
  {
    name: "Kelly Whitlock",
    major: "Computer Science",
    title: "President",
    contact: "mailto:xxxx@wayne.edu", // THIS IS AN HREF
    img: "https://github.com/WSU-Society-of-Computer-Developers/Website/blob/main/images/Kelly_w.jpg?raw=true"
  },
  {
    name: "Mohammed Ali",
    major: "Computer Science",
    title: "Vice President",
    contact: "mailto:xxxx@wayne.edu",
    img: "https://github.com/WSU-Society-of-Computer-Developers/Website/blob/main/images/Mohammed-Ali.png?raw=true"
  },
  {
    name: "Zavaar Shah",
    major: "Computer Science",
    title: "Software Lead",
    contact: "mailto:hh3509@wayne.edu",
    img: "https://showcase.zavaar.net/pics/me_3_prof_bg_2.jpg"
  },

]