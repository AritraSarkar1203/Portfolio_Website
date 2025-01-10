import project1 from "../assets/Projectimg/crc.jpg";
import project2 from "../assets/Projectimg/potfolioimg.png"
import project3 from "../assets/Projectimg/weather.png"
import project4 from "../assets/Projectimg/chatapp.png"
import img1 from "../assets/Blogs/portfolio1.png"
import img2 from "../assets/Blogs/chatapp.png"
import img3 from "../assets/Blogs/portfolio2.png"


export const PROJECTS= [
    {
        title:"Chatapp ",
        image: project4,
        description:"A fullstack realtime chatapp ",
        technologies:["Reactjs","Node.js","MongoDb","Express.js","Websockets"],
        link:"https://github.com/AritraSarkar1203/Realtime_Chatapp",
    },
    {
        title:"Classroom complex room booking ",
        image: project1,
        description:"A functional crc complex roombooking app backend with user authetication ",
        technologies:["Node.js","MongoDb","Express.js"],
        link:"https://github.com/AritraSarkar1203/ClassRoomComplex_Booking_Backend",
    },
    {
        title:"Portfolio website ",
        image: project2,
        description:"A functional static react portfolio website with tailewind css and framer motion  ",
        technologies:["React","Tailwind"],
        link:"https://github.com/AritraSarkar1203/Portfolio_Website",
    },
    {
        title:"Weather Website ",
        image: project3,
        description:"A weather looking website using api calling ",
        technologies:["HTML","CSS","Javascript","RESTapi"],
        link:"https://github.com/AritraSarkar1203/Weather-website",
    },
  
];



export const BLOGS =[
    {
        title: "Build the Portfolio",
        image: img1,
        tags: ["React", "Web Development"],
        date: "2024-12-25", // Use ISO date format
        link: "https://x.com/sarkar13508/status/1871650103150498221",
      },
      {
        title: "Build chatapp using websocket",
        image:img2,
        tags: ["JavaScript", "Programming"],
        date: "2024-12-31",
        link: "https://x.com/sarkar13508/status/1873822392394670109",
      },
      {
        title: "Update the Portfolio web ",
        image: img3,
        tags: ["React", "Web Development"],
        date: "2025-01-11", // Use ISO date format
        link: "https://x.com/sarkar13508/status/1877813960348455210",
      },
      
];