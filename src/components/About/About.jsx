import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <div className={styles.cont}>
        <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("MyImage/mysecondImage.jpg")}
          alt="Loading"
          className={styles.aboutImage}
        />
       <div className={styles.sidedown}>

        <p className={styles.description}>
              I am currently engaged in acquiring skills in DevOps and Backend Development and also I am in the process of refining my knowledge of Data Structures
              and Algorithms in preparation for upcoming placement opportunities. My enthusiasm for learning always inspires me to join new communities.
        </p>
        <div className={styles.contactinfouppercontainer} >

        <div className={styles.contactinfocontainer}>
        <a href="https://www.linkedin.com/in/flyervivek/">
        <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" className={styles.contacticon } />
        </a>
        </div>
        <div className={styles.contactinfocontainer}>
        <a href="https://github.com/FLYERVIVEK">
        <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" className={styles.contacticon } />
        </a>
        </div>
        <div className={styles.contactinfocontainer}>
        <a href="https://twitter.com/VivekYa44967642">
        <img src={getImageUrl("contact/xIcon.png")} alt="X icon" className={styles.contacticon1 } />
        </a>
        </div>

        </div>

        
       </div>
      </div>
         
      </div>
    </section>
  );
};
