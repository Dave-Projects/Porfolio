import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer_main}>
      <div className={styles.socials}>
        <a href="https://github.com/Dave-Projects" className={styles.github}>Github</a>
        <a href="https://www.linkedin.com/in/davevisual/" className={styles.linkedin}>Linkedin</a>
        <a href="https://www.twitter.com/davve_xoxo/" className={styles.twitter}>Twitter</a>
        <a href="https://www.instagram.com/davve_xoxo/" className={styles.instagram}>Instagram</a>
      </div>
      <div className={styles.footer_text}>
        <p>@daveandrew.visual 2024</p>
        <p>Mail : <a href="mailto:daveandrew.visual@gmail.com">daveandrew.visual@gmail.com</a></p>
      </div>
    </div>
  );
};

export default Footer;
