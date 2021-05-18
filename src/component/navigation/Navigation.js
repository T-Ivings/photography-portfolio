import React from 'react';
import { Navbar, Nav} from "react-bootstrap";
import { Fade } from 'react-reveal';
import logo from "../../images/carlena-ivings_web.jpg"

const Navigation = () => {
  return (
    <Navbar fixed={"top"} className="navbar">
      <Nav className='d-flex justify-content-around' id="navbar-links">
        <Fade delay={1000}>
          <Nav.Link>About</Nav.Link> 
          <Nav.Link>FAQ</Nav.Link>
          <Nav.Link>Portfolio</Nav.Link>
          <Navbar.Brand><img src={logo} width='300px'/></Navbar.Brand>
          <Nav.Link>Packages</Nav.Link> 
          <Nav.Link>Testimony</Nav.Link> 
          <Nav.Link>Blog</Nav.Link>
        </Fade>
      </Nav>
    </Navbar>
  )
}

export default Navigation;