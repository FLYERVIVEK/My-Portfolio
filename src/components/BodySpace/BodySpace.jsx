import React from "react";

import styles from "./BodySpace.module.css";
import { getImageUrl } from "../../utils";
import Resume from "../../../assets/Resume/VIVEKYADAVRESUME.pdf";

export const BodySpace = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <p className={styles.description1}>
             Hey, Myself
        </p>
        <h1 className={styles.title}>Vivek Yadav</h1>
        <p className={styles.description}>
          Devops Enthusiast
        </p>
        <div className={styles.social}>
        <a href="mailto:iamvivekyadav2003@gmail.com" className={styles.contactBtn}>
          Contact
        </a>
        <a  href={Resume} download="VIVEK_YADAV_RESUME" className={styles.contactBtn}>
          Resume
        </a>
        </div>
      </div>
      <img
        src={getImageUrl("MyImage/hummm.png")}
        alt="Loading"
        className={styles.heroImg}
      />
      {/* <div className={styles.topBlur} />
      <div className={styles.bottomBlur} /> */}
    </section>
  );
};
