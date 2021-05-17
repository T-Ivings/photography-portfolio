import React from 'react';
import { Navbar, Nav} from "react-bootstrap";
import logo from "../../images/carlena-ivings_web.jpg"

const Navigation = () => {
  return (
    <Navbar fixed={"top"} className="navbar">
        <Nav justify id="navbar-links">
          <Nav.Link>About</Nav.Link>
          <Nav.Link>FAQ</Nav.Link>
          <Nav.Link>Portfolio</Nav.Link>
          <Navbar.Brand><img src={logo} width='300px'/></Navbar.Brand>
          <Nav.Link>Kind Words</Nav.Link>
          <Nav.Link>Contact</Nav.Link>
          <Nav.Link>Blog</Nav.Link>
        </Nav>
    </Navbar>
  )
}

export default Navigation;