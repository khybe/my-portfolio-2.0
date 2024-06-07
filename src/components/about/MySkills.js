import styles from "./MySkills.module.css"; // Importing CSS module

const MySkills = () => {
  const { skillsContainer, specializedSkills, subSkill } = styles; // Assigning CSS classes from the imported module

  return (
    <div className={skillsContainer}>
      {/* Parent container for all skills */}
      <div className={specializedSkills}>
        {/* Container for specialized skills */}
        <h3>Specialized Skills and Tools</h3>
        <ul>
          {/* List of specialized skills */}
          <li>
            ⎼ <strong>HTML</strong>
          </li>
          <li>
            ⎼ <strong>CSS</strong>
          </li>
          <li>
            ⎼ <strong>JavaScript</strong>
          </li>
          <li>
            ⎼{" "}
            <strong>
              MERN Stack{" "}
              <small className={subSkill}>
                (MongoDB, Express, React, Node)
              </small>
            </strong>
          </li>
          <li>
            ⎼ <strong>React Hooks & Packages</strong>
          </li>
          <li>
            ⎼ <strong>Redux</strong>
          </li>
          <li>
            ⎼ <strong>TypeScript</strong>
          </li>
          <li>
            ⎼ <strong>Unit Test</strong>
          </li>
          <li>
            ⎼ <strong>Bootstrap</strong>
          </li>
          <li>
            ⎼ <strong>Responsive Web Design</strong>
          </li>
          <li>
            ⎼{" "}
            <strong>
              Version Control{" "}
              <small className={subSkill}>(Git and GitHub)</small>
            </strong>
          </li>
          <li>
            ⎼ <strong>Documentation</strong>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MySkills;
