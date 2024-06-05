import styles from "./MySkills.module.css"; // Importing CSS module

const MySkills = () => {
  const { skillsContainer, specializedSkills, familiarSkills } = styles; // Assigning CSS classes from the imported module

  return (
    <div className={skillsContainer}>
      {/* Parent container for all skills */}
      <div className={specializedSkills}>
        {/* Container for specialized skills */}
        <h3>Specialized Skills and Tools</h3>
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
            ⎼ <span>MERN Stack (MongoDB, Express, React, Node)</span>
          </li>
          <li>
            ⎼ <span>React Hooks & Packages</span>
          </li>
          <li>
            ⎼ <span>Redux</span>
          </li>
          <li>
            ⎼ <span>TypeScript</span>
          </li>
          <li>
            ⎼ <span>Unit Test</span>
          </li>
          <li>
            ⎼ <span>Bootstrap</span>
          </li>
          <li>
            ⎼ <span>Responsive Web Design</span>
          </li>
          <li>
            ⎼ <span>Version Control (Git and GitHub)</span>
          </li>
          <li>
            ⎼ <span>Documentation</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
