import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer: React.FC = () => {
  return (
    <footer className="footer-section">
      <Container>
        <Row>
          <Col className="text-center">
            <p>&copy; 2025 千葉の祭り. ALL RIGHTS RESERVED.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;