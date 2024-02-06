import React from "react";

import styles from "./Skills.module.css";
import { getImageUrl } from "../../utils";

export const Skills = () => {
  return (
    <section  className={styles.container} id="Skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.content}>
      <ul className={styles.navlinks}>
          <li>
            Android Development
          </li>
          <li>
            Web Development
          </li>
        </ul>
      <div className={styles.aboutcontainers}>
          <div className={styles.detailscontainer}>
            <h2 className={styles.experiencesubtitle}>Terminologies</h2>
            <div className={styles.articlecontainer}>
              <article>
                <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>XML Layout</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Android Studio</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>MERN Stack</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>API's Retrofit</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Git & Github</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Docker</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Kubernates</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>OOP's</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Restful API's</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>androidx</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>MVVM</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Coroutine</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      <div className={styles.aboutcontainers2}>
          <div className={styles.detailscontainer}>
            <h2 className={styles.experiencesubtitle}>Languages</h2>
            <div className={styles.articlecontainer}>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Java</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Kotlin</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Python</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>JavaScript</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3 className={styles.cpp}>C++</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>C</h3>
                  <p>Basic</p>
                </div>
              </article>
            </div>
          </div>
          <div className={styles.detailscontainer}>
            <h2 className={styles.experiencesubtitle}>Concepts</h2>
            <div className={styles.articlecontainer}>
              <article>
                <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Computer Networks</h3>
                  <p>Basic</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Operating System</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Data Structure</h3>
                  <p>Intermediate</p>
                </div>
              </article>
              <article>
              <div>
              <img
                  src={getImageUrl("skills/checkmark.png")}
                  alt="Experience icon"
                  className={styles.icon}
                  />
                  </div>
                <div>
                  <h3>Algorithms</h3>
                  <p>Intermediate</p>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
