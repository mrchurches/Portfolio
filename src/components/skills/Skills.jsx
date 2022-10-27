import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import colorSharp from "../../assets/img/color-sharp2.png";
import "react-multi-carousel/lib/styles.css";
import react from "../../assets/img/react.png";
import js from "../../assets/img/js.png";
import ts from "../../assets/img/Typescript.png";
import bootstrap from "../../assets/img/bootstrap.png";
import html from "../../assets/img/html.svg";
import css from "../../assets/img/css.svg";
import express from "../../assets/img/express.png";
import git from "../../assets/img/git.png";
import nodejs from "../../assets/img/nodejs.png";
import postgres from "../../assets/img/postgres.png";
import rb from "../../assets/img/rb.png";
import redux from "../../assets/img/redux.svg";
import sequelize from "../../assets/img/sequelize.png";

const Skills = () => {

  return (
 
    <section class=" d-flex triangle w-50 align-items-center justify-content-center w-100">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        id="skills"
      >
        <div>
          <h2 class="hvr-underline-from-center">Tech skills</h2>
        </div>
        <div class="d-flex flex-wrap align-items-center justify-content-center skill-box">
          <h5>Javascript</h5>
          <h5>NodeJS</h5>
          <h5>Typescript</h5>
          <h5>HTML5</h5>
          <h5>CSS3</h5>
          <h5>ReactJS</h5>
          <h5>Redux</h5>
          <h5>Express</h5>
          <h5>Git</h5>
          <h5>Postgres/PostgreSQL</h5>
          <h5>Sequelize</h5>
          <h5>React-Bootstrap</h5>
          <h5>Bootstrap</h5>
        </div>
        <div>
          <h2 class="hvr-underline-from-center">Soft skills</h2>
        </div>
        <div class="flex-wrap text-center skill-box">
          <p>
            My experience outside the IT world is +6 years in customer service,
            both face-to-face and by telephone, which allows me to have
            excellent communication, oral and written, and a very good active
            listening. In addition, in my last project i work in teams of seven
            teammates and put on practice and evidence my facility to
            communicate me, share my ideas, and organization to achieve our
            objectives.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
