import React from 'react'

import { Container, Row, Col } from 'reactstrap';

import './Footer.css'

import logo from './img/toroto-logo-black.png'
import fb from './img/fb.png'
import instagram from './img/instagram.png'
import linkedin from './img/linkedin.png'
import twitter from './img/twitter.png'

function Footer () {
  return (
    <Container>
      <Row>
        <div className="footer">
        <Col className="logo">
          <figure><img src={logo} alt="img" /></figure>
        </Col>
        <Col className="icons-container">
          <div>
            <figure><img src={fb} alt="img" /></figure>
          </div>
          <div>
            <figure><img src={instagram} alt="img" /></figure>
          </div>
          <div>
            <figure><img src={linkedin} alt="img" /></figure>
          </div>
          <div>
            <figure><img src={twitter} alt="img" /></figure>
          </div>
        </Col>
        </div>
      </Row>
    </Container>
  )
}

export default Footer