import { Container, Row, Col } from "react-bootstrap";
import logo from "../../assets/img/logo.gif";
import navIcon1 from "../../assets/img/nav-icon1.svg";
import github from "../../assets/img/github.png";
import twitter from "../../assets/img/twitter.png";
//import { MailchimpForm } from "../mailchimpform/MailChimpForm";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/*<MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/laureano-iglesias/" target="_blank"> <img src={navIcon1} alt=""/> </a>
            <a href="https://github.com/mrchurches" target="_blank"> <img src={github} alt=""/> </a>
            <a href="https://twitter.com/ldIglesias" target="_blank"> <img src={twitter} alt="twitter"/></a>
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
