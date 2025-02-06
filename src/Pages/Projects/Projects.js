import React from "react";
import { Link } from "react-router-dom";
import styles from "./Projects.module.css";

const Projects = () => {
  return (
    <div id="projects" className={styles.projects}>
      <div className={styles.heading}>Projects <span style={{fontFamily:"cursive"}}>&</span> Chaos</div>
      <div className={styles.works1}>
        <div>
          <Link to="/projects/1">
            <img src="./mockups/PrintVendo1.jpg" alt="" />
          </Link>
        </div> 
        <div>
          <Link to="/projects/3">
            <img src="./mockups/TOOLROOM.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/projects/5">
            <img src="./mockups/mu_gym2.jpg" alt="" />
          </Link>
        </div>
      </div>
      {/* <div className={styles.works2}>    
        
      </div> */}
      <div className={styles.works3}>
      <div>
          <Link to="/projects/4">
            <img src="./mockups/CET2.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/projects/2">
            <img src="./mockups/QuizMe.png" alt="" />
          </Link>
        </div>
        <div>
          <Link to="/projects/6">
            <img src="./mockups/PrintVendoUpload.png" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Projects;