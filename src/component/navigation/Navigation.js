import { React, useState, useEffect} from 'react';
import { Navbar, Nav} from "react-bootstrap";
import { Fade } from 'react-reveal';
import logo from "../../images/carlena-ivings_web.jpg";
import { debounce } from '../../utilities/debounce'; 
import './Navigation.scss';

const Navigation = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(true);


  const handleScroll = debounce(() =>  {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos   > currentScrollPos);

    setPrevScrollPos(currentScrollPos);
  });

  const styles = {
    'desktop': {

    },
    'mobile': {
    
    }
  };

  const responsiveSize = () => {
    return isMobile ? 250 : 450;
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll])

useEffect(() => {
  if (window.innerWidth > 769) {
    setIsDesktop(true);
    setIsMobile(false);
  } else {
    setIsDesktop(false);
    setIsMobile(true);
  }

},[]);

console.log(responsiveSize());
  return (
    <Navbar style={{top: visible ? '0' : '-160px', transition: 'top 0.6s'}} fixed={"top"} className="navbar">
      <Nav className='d-flex justify-content-around' id="navbar-links">
        <Fade delay={1000}>
          <Nav.Link>About</Nav.Link> 
          <Nav.Link>FAQ</Nav.Link>
          <Nav.Link>Portfolio</Nav.Link>
          <Navbar.Brand><img src={logo} width={(() => {return isMobile ? 250 : 450})} style={{responsiveSize}}/></Navbar.Brand>
          <Nav.Link>Packages</Nav.Link> 
          <Nav.Link>Testimony</Nav.Link> 
          <Nav.Link>Blog</Nav.Link>
        </Fade>
      </Nav>
    </Navbar>
  )
}

export default Navigation;