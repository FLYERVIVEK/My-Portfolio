import React from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      {/* <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:iamvivekyadav2003@gmail.com">iamvivekyadav2003@email.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/flyervivek">linkedin.com/flyervivek</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/flyervivek">github.com/flyervivek</a>
        </li>
      </ul> */}

      <p className={styles.sectiontextp1}>Get in Touch</p>
    <h1 className={styles.title}>Contact Me</h1>
    <div className={styles.contactinfouppercontainer} >

    <div className={styles.contactinfocontainer}>
    <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" className={styles.contacticon } />
    <p><a href="mailto:iamvivekyadav2003@gmail.com">iamvivekyadav2003@gmail.com</a></p>
    </div>
    <div className={styles.contactinfocontainer}>
    <img src={getImageUrl("contact/linkedinIcon.png")} alt="Linkedin icon" className={styles.contacticon } />
    <p><a href="https://www.linkedin.com/in/flyervivek/">Linkedin</a></p>
    </div>
    </div>

  <nav className={styles.navvv}>
    <div className={styles.navlinkscontainer}>
    <ul className={styles.navlinks}>
          <li >
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#Skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>
    </div>
  </nav>
    <p className={styles.para}>Copyright &#169; 2024 Vivek Yadav. All Rights Reserved.</p>
    </footer>



  );
};
