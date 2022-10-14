import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import Carousel from "react-multi-carousel";
import colorSharp from "../../assets/img/color-sharp2.png"
import "react-multi-carousel/lib/styles.css";
import react from "../../assets/img/react.png"
import js from "../../assets/img/js.png"
import ts from "../../assets/img/Typescript.png"
import bootstrap from "../../assets/img/bootstrap.png"
import html from "../../assets/img/html.svg"
import css from "../../assets/img/css.svg"
import express from "../../assets/img/express.png"
import git from "../../assets/img/git.png"
import nodejs from "../../assets/img/nodejs.png"
import postgres from "../../assets/img/postgres.png"
import rb from "../../assets/img/rb.png"
import redux from "../../assets/img/redux.svg"
import sequelize from "../../assets/img/sequelize.png"

const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };
  return (
    <section className='skill' id="skills">
        <Container>
            <Row>
                <Col>
                <div className='skill-bx'>
                    <h2>Soft Skills</h2>
                    <p>My experience outside the IT world is +6 years in customer service, both face-to-face and by telephone, which allows me to have excellent communication, oral and written, and a very good active listening.<br/>
                    In addition, in my last project i work in teams of seven teammates and put on practice and evidence my facility to communicate me, share my ideas, and organization to achieve our objectives.
                    </p>
                    <h2>Tech Skills</h2>

                    <Carousel responsive={responsive} infinite={true} className="skill-slider">
                        <div class="img-skill">
                            <img src={js} alt="img-skill"/>
                            <h5>Javascript</h5>
                        </div>
                        <div class="img-skill">
                            <img src={nodejs} alt="img-skill"/>
                            <h5>NodeJS</h5>
                        </div>
                        <div class="img-skill">
                            <img src={ts} alt="img-skill"/>
                            <h5>Typescript</h5>
                        </div>
                        <div class="img-skill">
                            <img src={html} alt="img-skill"/>
                            <h5>HTML5</h5>
                        </div>
                        <div class="img-skill">
                            <img src={css} alt="img-skill"/>
                            <h5>CSS3</h5>
                        </div>
                        <div class="img-skill">
                            <img src={react} alt="img-skill"/>
                            <h5>ReactJS</h5>
                        </div>
                        <div class="img-skill">
                            <img src={redux} alt="img-skill"/>
                            <h5>Redux</h5>
                        </div>
                        <div class="img-skill">
                            <img src={express} alt="img-skill"/>
                            <h5>Express</h5>
                        </div>
                        <div class="img-skill">
                            <img src={git} alt="img-skill"/>
                            <h5>Git</h5>
                        </div>
                        <div class="img-skill">
                            <img src={postgres} alt="img-skill"/>
                            <h5>Postgres/PostgreSQL</h5>
                        </div>
                        <div class="img-skill">
                            <img src={sequelize} alt="img-skill"/>
                            <h5>Sequelize</h5>
                        </div>
                        <div class="img-skill">
                            <img src={rb} alt="img-skill"/>
                            <h5>React-Bootstrap</h5>
                        </div>
                        <div class="img-skill">
                            <img src={bootstrap} alt="img-skill"/>
                            <h5>Bootstrap</h5>
                        </div>
                    </Carousel>
                </div>
                </Col>
            </Row>
        </Container>
        {/* <img className='background-image-left' src={colorSharp} alt="sharp"/> */}
    </section>

  )
}

export default Skills