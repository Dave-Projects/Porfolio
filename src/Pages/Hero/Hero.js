import React from "react";
import { Link } from "react-scroll";
import styles from "./Hero.module.css";
import { Helmet } from "react-helmet";

const Hero = () => {
  return (
    <div id="hero" className={styles.hero}>
      <Helmet>
        {/* Open Graph Protocol meta tags */}
        <meta property="og:title" content="Dave Andrew Arafol" />
        <meta property="og:description" content="My name is Punit Kumar Bhesota, a software developer and this is my home on the internet. I design, develop and create websites and apps." />
        <meta property="og:image" content="./info_pic.jpg"/>
        <meta property="og:url" content="https://bhesota.web.app" />
      </Helmet>
      <div className={styles.heading}>Dave Andrew Arafol</div>
      <div className={styles.hero_info}>
        <div className={styles.hero_info_para}>
          Your friendly neighborhood aspiring software developer with expertise in creating and mantaining database systems and developing
          web-based solutions using JavaScript and React. Skilled in software development using C# and Visual Basic, with strong foundation 
          in circuit components, Arduino sensors, and related technologies. A problem-solver passionate about integrating software and hardware
          to build efficient, innovative systems.
        </div>
        <div className={styles.hero_info_para2}>
          Enthusiastic web wizard and coding conjurer with collaboration superpowers! Equipped with the ability to turn coffee into code and brainstorming sessions into digital magic. Let's team up and turn your dreams into digital awesomeness - no wands required!
        </div>
        <Link to="contact" smooth className={styles.hero_info_btn}>
          Get in touch <img src="./arrowRW.png" alt="" />
        </Link>
      </div>
      <div className={styles.hero_content}>
        <div className={styles.stickers}>
          <img
            className={styles.sticker1}
            src="./stickers/fwd.png"
            alt=""
          />
          <img
            className={styles.sticker2}
            src="./stickers/backend.png"
            alt=""
          />
          <img className={styles.sticker4} src="./stickers/modern.png" alt="" />
        </div>
        <div className={styles.me_hero}>
          <img src="./DAVESS5.png" alt="" />
        </div>
        <div className={styles.stickers2}>
          <Link to="contact" smooth>
            <img  
              className={styles.sticker5}
              src="./stickers/workwm.png"
              alt=""
              style={{ cursor: "pointer" }}
            />
          </Link>

          <img className={styles.sticker3} src="./stickers/design.png" alt="" />

          <img
            className={styles.sticker7}
            src="./stickers/banner2.png"
            alt=""
          />
        </div>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className={styles.hero_content_mobile}>
          <img
            style={{ width: "60px", height: "60px", margin: "0 0 25px 10px" }}
            src="./stickers/fwd.png"
            alt=""
          />
          <img
            style={{
              width: "80px",
              height: "80px",
              margin: "0 10px 80px -20px",
            }}
            src="./stickers/backend.png"
            alt=""
          />
          <img className={styles.mob_me} src="./DAVESS.png" alt="" />
          <img
            style={{
              width: "80px",
              height: "80px",
              margin: "-25px 0 0 20px",
            }}
            className={styles.sticker5}
            src="./stickers/workwm.png"
            alt=""
          />
          <img
            style={{
              width: "80px",
              height: "70px",
              margin: "-30px 0px 0px 10px",
            }}
            src="./stickers/design.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
