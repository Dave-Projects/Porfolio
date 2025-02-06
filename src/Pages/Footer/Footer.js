import React from "react";
import styles from "./Footer.module.css";
// import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div id="footer" className={styles.footer_main}>
      <div className={styles.socials}>
          <a href="https://github.com/Dave-Projects">Github</a>
          <a href="https://www.linkedin.com/in/davevisual/">Linkedin</a>
          <a href="https://www.instagram.com/davve_xoxo/">Twitter</a>
          <a href="https://www.instagram.com/davve_xoxo/">Instagram</a>
          <a href="mailto:daveandrew.visual@gmail.com">Email</a>

      </div>
      <div className={styles.subheading_container}>
        <div className={styles.subheading}>@daveandrew.visual 2024</div>
      </div>    
    </div>
  );
};

export default Footer;
