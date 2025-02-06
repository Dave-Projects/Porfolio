import React from "react";
import styles from "./Navbar2.module.css";
import { Link } from "react-scroll";

const Navbar2 = ({ toggleSideBar }) => {
  return (
    <div className={styles.navbar}>
      <div>
        <div>daveandrew.visual</div>
      </div>
      <div className={styles.nav_links}>
        <a
          style={{ color: "white", textDecoration: "none"}}
          href="./Dave_Resume.pdf"
          download
        >
          <div>Resume</div>
        </a>
        <Link to="hero" smooth={true}>
          <div>Home</div>
        </Link>
        <Link to="info" smooth={true}>
          <div>Info</div>
        </Link>
        <Link to="projects" smooth={true}>
          <div>Projects</div>
        </Link>
        <Link to="contact" smooth={true}>
          <div>Contact</div>
        </Link>
      </div>
      <div className={styles.nav_btn} onClick={toggleSideBar}>
        <img src="./nav-icon.png" alt="" />
      </div>
    </div>
  );
};

export default Navbar2;
