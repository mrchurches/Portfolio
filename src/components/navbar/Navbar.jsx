import React, { useEffect, useState } from "react";
import {Navbar, Container, NavDropdown, Nav,} from "react-bootstrap"
import logo from "../../assets/img/logo.gif"
import navIcon1 from "../../assets/img/nav-icon1.svg"
import navIcon2 from "../../assets/img/nav-icon2.svg"
import twitter from "../../assets/img/twitter.png"
import github from "../../assets/img/github.png"

const NavBar = () => {
  const [activeLink, setActiveLink] = useState("Home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(()=>{
    const onScroll = ()=>{
      if(window.scrollY > 50){
        setScrolled(true);
      } else {
        setScrolled(false)
      }
    }

    window.addEventListener("scroll", onScroll);
    return ()=> window.removeEventListener("scroll", onScroll);
  },[])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value)
  }

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
    <Container>
      <Navbar.Brand href="/">
        <img src={logo} alt=""/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <span class="navbar-togller-icon"></span>
        </Navbar.Toggle>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home" className={activeLink === "home"? "active navbar-link" : "navbar-link"} onClick={()=> onUpdateActiveLink("home")}>Home</Nav.Link>
          <Nav.Link href="#skills" className={activeLink === "skills"? "active navbar-link" : "navbar-link"}  onClick={()=> onUpdateActiveLink("skills")}>Skills</Nav.Link>
          <Nav.Link href="#projects" className={activeLink === "projects"? "active navbar-link" : "navbar-link"}  onClick={()=> onUpdateActiveLink("projects")}>Projects</Nav.Link>
          <span className="navbar-text">
            <div className="social-icon">
            <a href="https://www.linkedin.com/in/laureano-iglesias/" target="_blank"> <img src={navIcon1} alt=""/> </a>
            <a href="https://github.com/mrchurches" target="_blank"> <img src={github} alt=""/> </a>
            <a href="https://twitter.com/ldIglesias" target="_blank"> <img src={twitter} alt="twitter"/></a>
            </div>
            <Nav.Link href="#connect">
            <button className="vvd" onClick={console.log("connect")}><span>Let's connect</span></button>
            </Nav.Link>
          </span>
          {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown> */}
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  );
};

export default NavBar;
