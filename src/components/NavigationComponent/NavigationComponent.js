import React from 'react';
import PropTypes from 'prop-types';
import { Container, Nav, Navbar } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const NavigationComponent = () => {
return(
<Navbar bg="dark" variant="dark">
<Container>
  <Navbar.Brand>
    Mis posts
  </Navbar.Brand>
  <Nav>
    <Link cLassName="nav-link" to='/'>Home</Link>
    <Link cLassName="nav-link" to='/posts'>Posts</Link>
    <Link cLassName="nav-link" to='/about'>About</Link>
    <Link cLassName="nav-link" to='/login'>Login</Link>
  </Nav>
</Container>

</Navbar>

)
};

NavigationComponent.propTypes = {};

NavigationComponent.defaultProps = {};

export default NavigationComponent;



