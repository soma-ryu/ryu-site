import React from 'react';
import { Navbar, Container } from 'react-bootstrap';

const Header: React.FC = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="#home">千葉の祭り</Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default Header;