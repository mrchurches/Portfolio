import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import header from "../../assets/img/header-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Banner = () => {
  //     const [isDeleting, setIsDeleting] = useState(false);
  //     const [loopNum, setLoopNum] = useState(0);
  //     const [text, setText] = useState("");
  //     const [delta,setDelta] = useState(300 - Math.random() * 100);
  //     const period = 2000;
  //     const toRotate = ["Full Stack web developer"];

  // useEffect(() => {
  //     let ticker = setInterval(() => {
  //         tick();
  //     }, delta)

  //     return () => { clearInterval(ticker)};
  // },[text])

  // const tick = () => {
  //     let i = loopNum % toRotate.length;
  //     let fullText = toRotate[i];
  //     let updatedText = isDeleting ? fullText.substring(0, text.length - 1 ) : fullText.substring(0, text.length + 1);

  //     setText(updatedText);

  //     if(isDeleting){
  //         setDelta(prevDelta => prevDelta / 2)
  //     }

  //     if(!isDeleting && updatedText === fullText){
  //         setIsDeleting(true);
  //         setDelta(period);
  //     } else if(isDeleting && updatedText === ""){
  //         setIsDeleting(false);
  //         setLoopNum(loopNum + 1);
  //         setDelta(500);

  //     }
  // }

  return (
    // <section id="home" className="banner">
    //     <Container>
    //         <Row className='align-items-center'>
    //             <Col xs={12} md={6} xl={7}>
    //                 <TrackVisibility>
    //                 {({isVisible}) =>
    //                 <div /*className={isVisible? "animate__animated animate__bounceIn" : "animate__animated animate__bounceOut"}*/ >
    //                     {/* <span className='tagline'>Welcome to my portfolio</span> */}
    //                     <h1>{`Hi i'm Laureano Iglesias `}</h1>
    //                     <p>I'm a fullstack web developer, with great capacity for teamwork, great adaptability and predisposition.<br/> During this year I studied and finished the full stack web developer bootcamp at Henry with +700 hours of practice/theory doing individual and group projects where I learned and perfected my back-end and front-end bases, with extensive use of javascript with their libraries and frameworks.

    //                     </p>
    //                 </div>}
    //                 </TrackVisibility>
    //             </Col>
    //             <Col xs={12} md={6} xl={5}>
    //                 <img src={header} alt="header-img"/>
    //             </Col>
    //         </Row>
    //     </Container>

    // </section>
    <div class="d-flex w-100 justify-content-center">
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
