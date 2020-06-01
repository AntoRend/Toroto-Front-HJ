import React from 'react'

import './InfoHome.css'

import { Container, Row, Col } from 'reactstrap';

function InfoHome () {
  return (
    <Container>
      <Row>
        <Col className="info-container">
          <h3>Proyecto de captura de carbono</h3>
          <h4>Manejo comunitario de bosques en el México rural</h4>
          <p>A través de la fotosíntesis los árboles capturan bióxido de carbono (CO2) y liberan oxígeno, limpiando así el aire de todos. A través de un manejo de bosques, podemos aumentar la cantidad de CO2 capturado, y también asegurarnos que permanece capturado por generaciones.</p>
        </Col>
      </Row>
    </Container>
  )
}

export default InfoHome 