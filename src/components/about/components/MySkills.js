import styles from "./MySkills.module.css"; // Importing CSS module

const MySkills = () => {
  const { skillsContainer, specializedSkills, familiarSkills } = styles; // Assigning CSS classes from the imported module

  return (
    <div className={skillsContainer}>
      {/* Parent container for all skills */}
      <div className={specializedSkills}>
        {/* Container for specialized skills */}
        <h3>Specialized</h3>
        <ul>
          {/* List of specialized skills */}
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
          <li>
            ⎼ <span>Documentation</span>
          </li>
        </ul>
      </div>
      <div className={familiarSkills}>
        {/* Container for familiar skills */}
        <h3>Familiar</h3>
        <ul>
          {/* List of familiar skills */}
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
          <li>
            ⎼ <span>Unit Test</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
