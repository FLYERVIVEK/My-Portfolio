import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
// import styled from 'styled-components'


// const Skill = styled.div`

//   background: ${({ theme }) => theme.card};
//   box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
//   border: 0.1px solid #854CE6;
//   border-radius: 16px;


  
// `

// width: 100%;
//   max-width: 500px;

// padding: 18px 36px;
//   @media (max-width: 768px) {
//     max-width: 400px;
//     padding: 10px 36px;
//   }
//   @media (max-width: 500px) {
//     max-width: 330px;
//     padding: 10px 36px;
//   }

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
          <p className={styles.description1}>
          Allow me to introduce myself,
          </p>
         
        My Name is Vivek Yadav. I am a dedicated final-year Computer Science Engineering student pursuing my bachelors degree from Chandigarh university. With a strong focus on DevOps and backend development, I am also deeply engaged in mastering Data Structures and Algorithms (DSA). Beyond academics, I am passionate about exploring new communities, traveling, photography, and riding, which making me a well-rounded individual with a keen interest in both technology and personal growth. My enthusiasm for learning always inspires me to join new communities. My short-term goal is to learn machine learning, and I am currently focused on self-study to achieve it.
        
        <p className={styles.description2}>
        Thank you
          </p>
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
        <a href="https://x.com/VivekYa67713764">
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
