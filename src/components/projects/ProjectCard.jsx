import React from 'react'
import { Col } from 'react-bootstrap'

const ProjectCard = ({title, description, imgUrl}) => {
  return (
    <Col sm={6} md={4}>
      
        <div className='proj-imgbx'>
            <img src={imgUrl} alt="projctimg"/>
            <div className='proj-txtx'>
                <h4>{title}</h4>
                <span>{description}</span>
                <br />
                <a href={title=== "The countries page"?"https://github.com/mrchurches/PI-Countries-main" :"https://github.com/mrchurches/e-commerce_client"} target="_blank">Link to Repository</a>
            </div>
        </div>
    </Col>
  )
}

export default ProjectCard