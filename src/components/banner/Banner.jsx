import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import header from "../../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  return (
    <div class="d-flex w-100 justify-content-center banner">
      <div class="skewed"></div>
      <div id="home" class="d-flex flex-column text-center mc">
        <div className="bar">
          <div class="d-flex m-1">
            <div id="red" class="hvr-shrink"></div>
            <div id="yellow" class="hvr-shrink"></div>
            <div id="green" class="hvr-shrink"></div>
          </div>
        </div>
        <div class="d-flex flex-column justify-content-center align-items-center h-100">
          <div>
            <h1>
              Hi i'm <span style={{ color: "#685369" }}>Laureano Iglesias 👋</span>
            </h1>
          </div>
          <div class="w-75">
            <h2>Full Stack developer</h2>
            <p>
              Welcome to my personal website, im a developer from Argentina in
              continuous learning, i'm looking for my first professional
              experience in it world...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
