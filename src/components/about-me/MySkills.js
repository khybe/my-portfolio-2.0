import styles from "./MySkills.module.css";

const MySkills = () => {
  const { skillsContainer, specializedSkills, familiarSkills } = styles;

  return (
    <div className={skillsContainer}>
      <div className={specializedSkills}>
        <h3>Specialized</h3>
        <ul>
          <li>
            ⎼ <span>HTML</span>
          </li>
          <li>
            ⎼ <span>CSS</span>
          </li>
          <li>
            ⎼ <span>JavaScript</span>
          </li>
          <li>
            ⎼ <span>React</span>
          </li>
          <li>
            ⎼ <span>React Hooks & Packages</span>
          </li>
          <li>
            ⎼ <span>Redux</span>
          </li>
          <li>
            ⎼ <span>ChatGPT</span>
          </li>
          <li>
            ⎼ <span>Bootstrap</span>
          </li>
          <li>
            ⎼ <span>Responsive Web Design</span>
          </li>
          <li>
            ⎼ <span>Git & GitHub</span>
          </li>
        </ul>
      </div>
      <div className={familiarSkills}>
        <h3>Familiar</h3>
        <ul>
          <li>
            ⎼ <span>Node.js</span>
          </li>
          <li>
            ⎼ <span>Express.js</span>
          </li>
          <li>
            ⎼ <span>MongoDB</span>
          </li>
          <li>
            ⎼ <span>TypeScript</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
