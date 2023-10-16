import React from "react";

import MySkills from "./MySkills";
import profileImage from "../../assets/profileImage.png";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./AboutMe.css";

function AboutMe() {
  return (
    <section id="about">
      <div className="about-content">
        <div className="about-profile">
          <img
            className="about-profile-image"
            src={profileImage}
            alt="Khaibar Saadat Profile"
          />
          <h2 className="name">Khaibar Saadat</h2>
          <h3 className="profession">Front-End Developer</h3>
          <div className="buttons">
            <a
              href="https://drive.google.com/file/d/1vVOhrLF7ZmOfJQXGgbakIfpsflboVmpf/view?usp=sharing"
              className="resume-button"
              target="__blank"
            >
              Resume
            </a>
            <a href="mailto:saadat.khaibar@gmail.com" className="email-button">
              Email
            </a>
          </div>
          <div className="social-icons">
            <a
              href="https://github.com/khybe"
              target="_blank"
              rel="noreferrer"
              className="github-link"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/khaibar-saadat-6a3858208/"
              target="_blank"
              rel="noreferrer"
              className="linkedin-link"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
        <article className="about-description">
          <h2 className="about-title">ABOUT ME</h2>
          <p>
            I am Khaibar Saadat, a self-taught front-end developer with a strong
            passion for technology and a talent for creating dynamic websites.
            <br />
            <br />
            Over the past four years, I've delved deep into a variety of
            programming languages and tools, continuously refining my skills. My
            journey has been an ongoing exploration of learning, with a
            relentless drive to achieve more. In addition to front-end
            expertise, I am also familiar with MERN stack development, making me
            well-prepared for full-stack challenges.
            <br />
            <br />
            Whether you have a project in mind, seek collaboration, or wish to
            explore my portfolio, I invite you to visit my workspace or reach
            out to me directly. Your web development aspirations are just a
            message away from becoming a reality.
          </p>
          <MySkills />
        </article>
      </div>
    </section>
  );
}

export default AboutMe;
