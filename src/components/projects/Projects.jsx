import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard.jsx";
import pi from "../../assets/img/pi.gif";
import portfolio from "../../assets/img/portfolio.gif";
import pf from "../../assets/img/pf.gif";

const Projects = () => {
  const projects = [
    {
      title: "World",
      description:
        "A SPA(single page aplication) that uses React, Redux in front and express, nodeJS, Postgres and Sequelize in the back",
      imgUrl: pi,
      repository: "https://github.com/mrchurches/PI-Countries-main",
      deploy: "https://pi-world.vercel.app/home",
    },
    {
      title: "Videogames e-commerce",
      description: "a fully e-commerce page",
      imgUrl: pf,
      repository: "https://github.com/mrchurches/e-commerce_client",
      deploy: "https://e-commerce-videogames.vercel.app/",
    },
    {
      title: "Portfolio",
      description:
        "This portfolio do it with React-Bootstrap, NodeMailer, Animate.css, Express",
      imgUrl: portfolio,
      repository: "https://github.com/mrchurches/Portfolio",
      deploy: "https://portfolio-laureano.vercel.app/",
    },
  ];
  return (
    <div>
      <div id="projects" class="pt-5">
        <div class="d-flex flex-column align-items-center justify-content-center">
          <h2 class="hvr-underline-from-center">Projects</h2>
        </div>
        <div class="d-flex align-items-center justify-content-center flex-wrap">
          {projects.map((e, index) => {
            return <ProjectCard key={index} {...e} />;
          })}
        </div>
      </div>
      <section class="curved"></section>
    </div>
  );
};

export default Projects;
