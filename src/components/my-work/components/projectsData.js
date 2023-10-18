import guessMyNumberImage from "../../../assets/guessMyNumber.png";
import simonSaysImage from "../../../assets/simonSays.png";
import pigGameImage from "../../../assets/pigGame.png";
import yourplaceImage from "../../../assets/yourplace.png";
import comingSoonImage from "../../../assets/comingSoon.jpg";

export const projectsData = [
  {
    id: "p1",
    title: "Guess My Number",
    image: guessMyNumberImage,
    description: `Is an online game where players try to guess a randomly generated number in the fewest number of attempts possible.
       It is a simple yet engaging game that can be played alone or with friends.`,
    githubLink: "https://github.com/khybe/guess-my-number",
    projectLink: "https://guess-my-number-eight-plum.vercel.app/",
  },
  {
    id: "p2",
    title: "Simon Says",
    image: simonSaysImage,
    description: `A simple interactive game built using Javascript and React.js, where the computer plays a sequence that the user must remember.
      The game can improve cognitive skills such as working memory and attention.`,
    githubLink: "https://github.com/khybe/Simon-says",
    projectLink: "https://simon-says-orcin.vercel.app/",
  },
  {
    id: "p3",
    title: "Pig Game",
    image: pigGameImage,
    description: `A simple dice game where players roll a die and accumulate points, but risk losing all points for the turn if they roll a 
      1. The winner is the first to reach 100 points.
      2. It's a jeopardy game where players make decisions on whether to risk previous gains for greater gains by rolling again.`,
    githubLink: "https://github.com/khybe/pig-game",
    projectLink: "https://pig-game-bay.vercel.app/",
  },

  {
    id: "p4",
    title: "Your Place",
    image: yourplaceImage,
    description: `Your Places is a MERN full-stack web app with MongoDB, Express, React, and Node.
        It has auth, authorization, CRUD operations, and uses AWS S3 for image storage. Users can add multiple 
        locations and view them on a Google Map modal.`,
    githubLink:
      "https://github.com/khybe/yourplace-MERN-project-with-CRUD-operations-frontend",
    projectLink: "https://yourplace-6ac22.web.app/",
  },
  { id: "p5", title: "Coming Soon", image: comingSoonImage },
  { id: "p6", title: "Coming Soon", image: comingSoonImage },
];
