import React from "react";
import { Col } from "react-bootstrap";

const ProjectCard = ({ title, description, imgUrl, repository, deploy }) => {
  return (
    <div class="pr-box text-center">
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
  );
};

export default ProjectCard;
