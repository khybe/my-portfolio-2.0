// Import images for the component
import greetingImageSmall from "../../assets/greeting-768x432.gif";
import greetingImageMedium from "../../assets/greeting-1152x648.gif";
import greetingImageLarge from "../../assets/greeting-1920x1080.gif";
import hireMeGif from "../../assets/hire-me-500x500.gif";

// Import CSS styles for the component
import styles from "./Home.module.css";

const Home = () => {
  // Destructure CSS class names from the imported styles object
  const { hero, heroContent, tagline, mottoContainer, helloAnimeContainer } =
    styles;

  return (
    <section id={hero}>
      <div className={heroContent}>
        <p className={tagline}>
          A <span>Front-end Developer.</span>
        </p>
        <div className={mottoContainer}>
          <p>
            I believe in brevity and minimalism to create dynamic, sleek, and
            user-friendly web apps.
          </p>
          <a href="mailto:saadat.khaibar@gmail.com">
            {/* Display a link for hiring with a GIF animation */}
            <img src={hireMeGif} alt="Hire me animation in the form of a GIF" />
          </a>
        </div>
        <div className={helloAnimeContainer}>
          <picture>
            {/* Use responsive images based on viewport width */}
            <source srcset={greetingImageSmall} media="(max-width: 768px)" />
            <source srcset={greetingImageMedium} media="(max-width: 1152px)" />
            <img
              src={greetingImageLarge}
              alt="Hello, I am Khaibar! animation"
            />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Home; // Export the Home component as the default
