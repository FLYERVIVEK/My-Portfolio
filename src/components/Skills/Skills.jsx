import React from "react";

import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section  className={styles.container} id="Skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
      <div className={styles.aboutcontainers}>


      <div className={styles.detailscontainer}>
            <h2 className={styles.experiencesubtitle}>Programming</h2>
            <div className={styles.articlecontainer}>
          
            <article>
                <div>
                  <h3>Java</h3>
                </div>
              </article>

              <article>
            <div>
              <h3>Golang (Learning)</h3>
            </div>
          </article>

              <article>
                <div>
                  <h3>Python (Intermediate)</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>JavaScript (Intermediate)</h3>
                </div>
              </article>

              <article>
            <div>
              <h3>Kotlin (Basic)</h3>
            </div>
          </article>

              <article>
                <div>
                  <h3 className={styles.cpp}>C++ (Basic)</h3>
                </div>
              </article>


            </div>
          </div>

          <div className={styles.detailscontainer}>
            <h2 className={styles.experiencesubtitle}>Technologies</h2>
            <div className={styles.articlecontainer}>
          
             <article>
                <div>
                  <h3>Docker</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Kubernetes</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Jenkins</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Git & Github</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>AWS</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Android Studio</h3>
                </div>
              </article>

          
            </div>
          </div>

          <div className={styles.detailscontainer}>
            <h2 className={styles.experiencesubtitle}>Development</h2>
            <div className={styles.articlecontainer}>
          

            <article>
                <div>
                  <h3>React</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Node</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Express</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>MongoDB</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Restful API's</h3>
                </div>
              </article>

              

              <article>
                <div>
                  <h3>XML</h3>
                </div>
              </article>

              

              <article>
                <div>
                  <h3>Jetpack Compose</h3>
                </div>
              </article>

          
            </div>
          </div>

          <div className={styles.detailscontainer}>
            <h2 className={styles.experiencesubtitle}>Coursework</h2>
            <div className={styles.articlecontainer}>
          
            <article>
                <div>
                  <h3>Computer Networks</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Operating Systems</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>Data Structure and Algorithms</h3>
                </div>
              </article>

              <article>
                <div>
                  <h3>OOP's</h3>
                </div>
              </article>

          
            </div>
          </div>


          
        
      </div>
      </div>
    </section>
  );
};
