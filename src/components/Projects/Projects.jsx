import React from "react";

import styles from "./Projects.module.css";

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

import projects from "../../data/projects.json";
import { ProjectCard } from "./ProjectCard";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block",background: "rgb(53,53,53)",  border: "1px solid black"}}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
 
    <div
      className={className}
      style={{ ...style, display: "block", background: "rgb(53,53,53)", border: "1px solid black"}}
      onClick={onClick}
      /> 
    
      );
    }
    
export const Projects = () => {

  var settings = { 
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          dots: true
        }
      },
      {
        breakpoint: 765,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };


  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
      
      <Slider {...settings}>

        {projects.map((project, id) => {
          return <ProjectCard key={id} project={project} />;
        })}
        
      </Slider>
      </div>
    </section>
  );
};
