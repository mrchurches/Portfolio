import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, repository, deploy }) => {
  return (
    <div class="pr-box text-center hvr-grow-shadow">
      <div className="bar">
        <div class="d-flex m-1">
          <div id="red" class="hvr-shrink"></div>
          <div id="yellow" class="hvr-shrink"></div>
          <div id="green" class="hvr-shrink"></div>
        </div>
      </div>
      <div class="m-2">
        <div class="pro-img">
          <img src={imgUrl} alt="img" />
        </div>
        <div>
          <h4>{title}</h4>
        </div>
        <div>
          <span>{description}</span>
        </div>
        <div>
          <div>
            <a href={repository} target="_blank">
              Repository
            </a>
          </div>
          <div>
            <a href={deploy} target="_blank">
              Deploy
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
