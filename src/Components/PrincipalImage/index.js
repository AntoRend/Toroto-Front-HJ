import React from 'react'

import './PrincipalImage.css'

import Toroto from './img/Toroto-background.jpg'

import { Row, Col } from 'reactstrap';

function PrincipalContent () {
  return (
    <Row className="image-container">
      <Col>
        <figure>
          <img className="image" src={Toroto} alt="img"/>
        </figure>
      </Col>
    </Row>
  )
}

export default PrincipalContent