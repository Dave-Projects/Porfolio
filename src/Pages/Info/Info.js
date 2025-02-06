import React from "react";
import styles from "./Info.module.css";
import { Link } from "react-scroll";
const Info = () => {
  return (
    <div id="info" className={styles.info}>
      <div className={styles.image}>
        <img className={styles.main_image} src="./ADOR.jpg" alt="" />
        <img className={styles.logo} src="./stickers/DA.png" alt="" />
      </div>
      <div className={styles.bio}>
        <div className={styles.heading}>
          Hello <br />
          Fellow People.
        </div>
        <p className={styles.bio_para}>
          My name is <b>Dave Andrew Arafol</b>, just another software developer and this is my home on the internet. I design, develop and create websites and apps.
        </p>
        <p className={styles.bio_para}>
        Speaking of credentials, I'm currently pursuing a Bachelor of Science in Information Technology.
        I’m passionate about music and love playing instruments. From rocking stages to bringing scripts to life, I’ve performed in several plays since my school days.
         Along the way, I’ve bemeen soaking up skills like a digital sponge—always learning, growing, and pushing boundaries (yep, learning might as well be my middle name!)
        </p>
        <Link to="contact" smooth>
        <button className={styles.info_coa}>
          Get to know more <img src="arrowRB.png" alt="" />
        </button>
        </Link>

      </div>
    </div>
  );
};

export default Info;
