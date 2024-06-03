// Import images for each project
import gronRensSyningImage from "../../assets/gronrenssyning.png";
import tichyViolinImage from "../../assets/tichyviolin.png";
import eShopImage from "../../assets/react-ts-redux-e-shop.png";
import todoAppImage from "../../assets/todoApp.png";
import yourplaceImage from "../../assets/yourplace.png";
import guessMyNumberImage from "../../assets/guessMyNumber.png";
import pigGameImage from "../../assets/pigGame.png";
import simonSaysImage from "../../assets/simonSays.png";

// Data for different projects
export const projectsData = [
  {
    id: "p1",
    title: "gronrenssyning.dk",
    image: gronRensSyningImage,
    description:
      "Developed a comprehensive and responsive MERN stack app for a laundry and tailoring business, featuring seamless order management, secure user/admin interfaces with multilingual support, and dynamic order confirmation emails using NodeMailer.",
    projectLink: "https://groenrenssyning.dk/",
    toolSet: [
      "HTML",
      "CSS",
      "JavaScript",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "NodeMailer",
      "React API Context",
    ],
  },
  {
    id: "p2",
    title: "tichyviolin.cz",
    image: tichyViolinImage,
    description:
      "Craftsmanship portfolio website in four languages (Czech, English, Spanish, French), showcasing the client's violin-making expertise and heritage. Implemented a responsive design to ensure optimal viewing experience across devices.",
    projectLink: "https://tichyviolin.cz/",
    githubLink: "https://github.com/khybe/tichy-violin-craftsman-portfolio",
    toolSet: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    id: "p3",
    title: "React TS Redux E Shop",
    image: eShopImage,
    description: `Dive into a feature-rich E-Commerce web app built with React, TypeScript, and Redux for efficient state management. Explore a seamless shopping experience, dynamic UIs, and cutting-edge technologies for an enhanced online presence.`,
    githubLink: "https://github.com/khybe/react-ts-redux-e-shop-tutorial",
    toolSet: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Redux"],
  },
  {
    id: "p4",
    title: "Todo App",
    image: todoAppImage,
    description: `Practice project: a powerful ToDo App using TypeScript. Offers seamless task management with dynamic task addition and deletion. Experience real-world TypeScript application and Context API for effective state management, enhancing your development skills.`,
    githubLink: "https://github.com/khybe/todo-react-ts-guide",
    toolSet: ["HTML", "CSS", "JavaScript", "React", "TypeScript"],
  },

  {
    id: "p5",
    title: "Your Place",
    image: yourplaceImage,
    description: `Your Place is a feature-rich full-stack app offering seamless user experience with user controls, key CRUD operations, AWS S3 for image storage, and integrated Google Maps for location visualization.`,
    githubLink:
      "https://github.com/khybe/yourplace-MERN-project-with-CRUD-operations-frontend",
    projectLink: "https://yourplace-6ac22.web.app/",
    toolSet: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "MongoDB",
      "Express",
      "Node",
    ],
  },
  {
    id: "p6",
    title: "Guess My Number",
    image: guessMyNumberImage,
    description: `Is an online game where players try to guess a randomly generated number in the fewest number of attempts possible.
       It is a simple yet engaging game that can be played alone or with friends.`,
    githubLink: "https://github.com/khybe/guess-my-number",
    projectLink: "https://guess-my-number-eight-plum.vercel.app/",
    toolSet: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "p7",
    title: "Pig Game",
    image: pigGameImage,
    description: `A simple dice game where players roll a die and accumulate points, but risk losing all points for the turn if they roll a 
      1. The winner is the first to reach 100 points.
      2. It's a jeopardy game where players make decisions on whether to risk previous gains for greater gains by rolling again.`,
    githubLink: "https://github.com/khybe/pig-game",
    projectLink: "https://pig-game-bay.vercel.app/",
    toolSet: ["HTML", "CSS", "JavaScript", "React"],
  },
  {
    id: "p8",
    title: "Simon Says",
    image: simonSaysImage,
    description: `A simple interactive game built using Javascript and React.js, where the computer plays a sequence that the user must remember.
      The game can improve cognitive skills such as working memory and attention.`,
    githubLink: "https://github.com/khybe/Simon-says",
    projectLink: "https://simon-says-orcin.vercel.app/",
    toolSet: ["HTML", "CSS", "SCSS", "JavaScript", "React"],
  },
];
