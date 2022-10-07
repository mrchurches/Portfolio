import React from 'react'
import { Col, Container, Row, Tab } from 'react-bootstrap'
import ProjectCard from "./ProjectCard.jsx"
import colorSharp2 from "../../assets/img/color-sharp.png"
import portfolio from "../../assets/img/portfolio.png"

const Projects = () => {
  const projects = [
    {
      title: "The countries page",
      description: "A SPA(single page aplication) that uses React, Redux in front and express, nodeJS, Postgres and Sequelize in the back",
      imgUrl: "https://media0.giphy.com/media/pZ9usVhLXcAIsLYRoy/giphy.gif?cid=790b761112280b352e7818f69f48ee44d23d48c2311bd64d&rid=giphy.gif&ct=g"
    },
    {
      title: "Videogames e-commerce",
      description: "a fully e-commerce page",
      imgUrl: "https://media3.giphy.com/media/PhRugtKQ960Htna4MN/giphy.gif?cid=790b7611afa889cd816110b49daaffe0f0a3f628c5dc3410&rid=giphy.gif&ct=g"
    },
    {
      title: "Portfolio",
      description: "This portfolio do it with React-Bootstrap, NodeMailer, Animate.css, Express",
      imgUrl: portfolio
    }
  ]
  return (
   <section className='project' id="projects">
    <Container>
      <Row>
        <Col>
        <h2>Projects</h2>
        <br/>
        {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor, suscipit! Iusto, earum ea eum, expedita dolor aut nisi error nobis nostrum tempore distinctio! Ipsam rem laborum, commodi amet cum quis!</p> */}
        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          {/* <Nav variant="pills" className='nav-pills mb-5 justify-content-center align-items-center' id="pills-tab">
            <Nav.Item>
              <Nav.Link eventKey="first">Tab one</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Tab two</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">
                Tab three
              </Nav.Link>
            </Nav.Item>
          </Nav> */}
        <Tab.Content>
          <Tab.Pane eventKey="first">
            <Row>
              {
                projects.map((e,index)=>{
                  return(
                      <ProjectCard key={index} {...e}/>
                  )
                })
              }
            </Row>
          </Tab.Pane>
          <Tab.Pane eventKey="second">
          Coming soon...
          </Tab.Pane>
          <Tab.Pane eventKey="third">
          Coming soon...
          </Tab.Pane>
        </Tab.Content>
        </Tab.Container>
        </Col>
      </Row>
    </Container>
    <img src={colorSharp2} className="background-image-right" alt=""/>
   </section>
  )
}

export default Projects