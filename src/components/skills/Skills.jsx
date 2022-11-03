import React from "react";
import "react-multi-carousel/lib/styles.css";

const Skills = () => {
  return (
    <section class=" d-flex triangle w-50 align-items-center justify-content-center w-100">
      <div
        class="d-flex flex-column align-items-center justify-content-center"
        id="skills"
      >
        <div class="skills">
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
        </div>

        <div class="skills">
          <div>
            <h2 class="hvr-underline-from-center">Soft skills</h2>
          </div>
          <div class="flex-wrap text-center skill-box">
            <p>
              My experience outside the IT world is +6 years in customer
              service, both face-to-face and by telephone, which allows me to
              have excellent communication, oral and written, and a very good
              active listening. In addition, in my last project i work in teams
              of seven teammates and put on practice and evidence my facility to
              communicate me, share my ideas, and organization to achieve our
              objectives.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
