import React from "react";

import styles from "./Skills.module.css";
import { skills } from './data';
import styled from 'styled-components'




const Container = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
position: relative;
z-index: 1;
align-items: center;
width: 100%;


`

const Wrapper = styled.div`
position: relative;
display: flex;
justify-content: space-between;
align-items: center;
flex-direction: column;
width: 100%;
max-width: 1100px;
gap: 12px;
@media (max-width: 960px) {
    flex-direction: column;
}
`

export const Desc = styled.div`
    font-size: 18px;
    text-align: center;
    max-width: 600px;
    color: ${({ theme }) => theme.text_secondary};
    @media (max-width: 768px) {
        font-size: 16px;
    }
`;

const SkillsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  gap: 30px;
  justify-content: center;
`
// border: 0.1px solid #854CE6;

const Skill = styled.div`
  width: 100%;
  max-width: 500px;
  background: ${({ theme }) => theme.card};
  border: rgb(53, 53, 53) 0.09rem solid;
  box-shadow: rgba(23, 92, 230, 0.25) 0px 4px 24px;
  border-radius: 16px;
  padding: 18px 36px;
  @media (max-width: 768px) {
    max-width: 400px;
    padding: 10px 36px;
  }
  @media (max-width: 500px) {
    max-width: 330px;
    padding: 10px 36px;
  }
`

const SkillList = styled.div`
  display: flex;
  justify-content: center; 
  flex-wrap: wrap;
  gap: 12px;
  margin-bottom: 20px;
`

const SkillItem = styled.div`
  font-family: var(--font-root);
  color: var(--color-secondary);
  font-size: 16px;
  font-weight: 400;
  border: 1px solid ${({ theme }) => theme.text_primary + 80};
  border-radius: 12px;
  padding: 12px 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  @media (max-width: 768px) {
    font-size: 14px;
    padding: 8px 12px;
  }
  @media (max-width: 500px) {
    font-size: 14px;
    padding: 6px 12px;
  }
`

const SkillImage = styled.img`
  width: 24px;
  height: 24px;
`





export const Skills = () => {
  return (
    <section  className={styles.container} id="Skills">
      {/* <div className={styles.content}>
        <div className={styles.aboutcontainers}>
          <div className={styles.detailscontainer}> */}
            
          <Container >
      <Wrapper>
        <h1 className={styles.title}>Skills</h1>
        {/* <Desc>Here are some of my skills.
        </Desc> */}
        <SkillsContainer>
          {skills.map((skill) => (
            <Skill>
              <h1 className={styles.description}>{skill.title}</h1>
              <h2 className={styles.description}>{skill.title2}</h2>
              <SkillList>
                {skill.skills.map((item) => (
                  <SkillItem>
                    <SkillImage key={item.name} src={item.image}/>
                    {item.name}
                  </SkillItem>
                ))}
              </SkillList>
            </Skill>
          ))}

        </SkillsContainer>
      </Wrapper>
    </Container>
          {/* </div>
        </div>
      </div> */}
    </section>
  );
};
