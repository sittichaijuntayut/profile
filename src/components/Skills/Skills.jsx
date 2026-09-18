import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import styles from "./Skills.module.css";

function Skills() {
  const skills = [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "React", icon: <FaReact /> },
    { name: "Node.js", icon: <FaNodeJs /> },
    { name: "Git", icon: <FaGitAlt /> },
  ];

  return (
    <section id="skills" className={styles.skills}>
      <h2>My Skills</h2>

      <div className={styles.skillsContainer}>
        {skills.map((skill, index) => (
          <div className={styles.skillCard} key={index}>
            <div className={styles.icon}>{skill.icon}</div>
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
