import { React, useState, useEffect} from 'react';
import { Navbar, Nav, Dropdown } from "react-bootstrap";
import { Fade } from 'react-reveal';
import { debounce } from '../../utilities/debounce'; 
import logo from "../../images/carlena-ivings_web.jpg";
import './Navigation.scss';

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
          <Nav.Link href='/faq'></Nav.Link>
          <Nav.Link href='/portfolio'>Portfolio</Nav.Link>
          
          <Dropdown navbar={true} as={Nav.Item}>
            <Dropdown.Toggle id='custom-dropdown' as={Nav.Link}>Portfolio</Dropdown.Toggle>
            <Dropdown.Menu>
            <Dropdown.Item>Family</Dropdown.Item>
            <Dropdown.Item>Indoor</Dropdown.Item>
            <Dropdown.Item>Newborn</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Navbar.Brand><Nav.Link href='/'><img src={logo} width='200px'/></Nav.Link></Navbar.Brand>
          <Nav.Link href='/rates'>Sessions</Nav.Link> 
          <Nav.Link href='/kind_words'>Testimony</Nav.Link> 
          <Nav.Link href='#'>Blog</Nav.Link>
        </Fade>
      </Nav>
    </Navbar>
  )
}

export default Navigation;