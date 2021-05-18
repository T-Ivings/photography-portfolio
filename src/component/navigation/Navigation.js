import { React, useState, useEffect} from 'react';
import { Navbar, Nav} from "react-bootstrap";
import { Fade } from 'react-reveal';
import { debounce } from '../../utilities/debounce'; 
import logo from "../../images/carlena-ivings_web.jpg";

const Navigation = () => {

  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [visible, setVisible] = useState(true);


  const handleScroll = debounce(() =>  {
    const currentScrollPos = window.pageYOffset;

    setVisible(prevScrollPos   > currentScrollPos);

    setPrevScrollPos(currentScrollPos);
  });

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos, visible, handleScroll])


  return (
    <Navbar style={{top: visible ? '0' : '-160px', transition: 'top 0.6s'}} fixed={"top"} className="navbar">
      <Nav className='d-flex justify-content-around' id="navbar-links">
        <Fade delay={1000}>
          <Nav.Link href='/about'>About</Nav.Link> 
          <Nav.Link href='/faq'>FAQ</Nav.Link>
          <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          <Navbar.Brand><Nav.Link href='/'><img src={logo} width='200px'/></Nav.Link></Navbar.Brand>
          <Nav.Link href='packages'>Packages</Nav.Link> 
          <Nav.Link href='kind_words'>Testimony</Nav.Link> 
          <Nav.Link href='#'>Blog</Nav.Link>
        </Fade>
      </Nav>
    </Navbar>
  )
}

export default Navigation;