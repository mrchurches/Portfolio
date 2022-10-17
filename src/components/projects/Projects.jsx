import React from "react";
import { Col, Container, Row, Tab } from "react-bootstrap";
import ProjectCard from "./ProjectCard.jsx";
import colorSharp2 from "../../assets/img/color-sharp.png";
import portfolio from "../../assets/img/portfolio.png";

const Projects = () => {
  const projects = [
    {
      title: "The countries page",
      description:
        "A SPA(single page aplication) that uses React, Redux in front and express, nodeJS, Postgres and Sequelize in the back",
      imgUrl:
        "https://media0.giphy.com/media/pZ9usVhLXcAIsLYRoy/giphy.gif?cid=790b761112280b352e7818f69f48ee44d23d48c2311bd64d&rid=giphy.gif&ct=g",
        repository: "https://github.com/mrchurches/PI-Countries-main",
        deploy:"https://countries-page-plum.vercel.app/"
    },
    {
      title: "Videogames e-commerce",
      description: "a fully e-commerce page",
      imgUrl:
        "https://media3.giphy.com/media/PhRugtKQ960Htna4MN/giphy.gif?cid=790b7611afa889cd816110b49daaffe0f0a3f628c5dc3410&rid=giphy.gif&ct=g",
        repository:"https://github.com/mrchurches/e-commerce_client",
        deploy:"https://e-commerce-videogames.vercel.app/"
    },
    {
      title: "Portfolio",
      description:
        "This portfolio do it with React-Bootstrap, NodeMailer, Animate.css, Express",
      imgUrl: portfolio,
      repository:"https://github.com/mrchurches/Portfolio",
      deploy:"https://portfolio-laureano.vercel.app/"
    },
  ];
  return (
    <div id="projects">
      <div class="d-flex flex-column align-items-center justify-content-center w-100">
        <h2>Projects</h2>
      </div>
      <div class="d-flex align-items-center justify-content-center flex-wrap">
        {projects.map((e, index) => {
          return <ProjectCard key={index} {...e} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
