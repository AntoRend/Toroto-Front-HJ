import React from 'react'

import './InfoSubscription.css'

import { Container, Row, Col } from 'reactstrap';
import { Card, CardImg, CardText, CardTitle, CardBody } from 'reactstrap'

import bosqueUno from './img/bosque1.jpg'
import bosqueDos from './img/bosque2.jpg'

function InfoSubscription () {
  return (
    <Container>
      <Row>
        <h3>Detalles del Proyecto </h3>
        <Col className="cards-container">
          <Card>
            <CardImg top width="100%" src={bosqueUno} alt="Card img" />
            <CardBody>
              <CardTitle>¿Cómo se sabe cuánto CO2 captura este proyecto?</CardTitle>
              <CardText>Para conocer esto, necesitamos medir el crecimiento de los árboles año tras año. El 10% de todos los árboles en el bosque son medidos manualmente, uno por uno, una vez al año. Reuniendo datos del diámetro y altura, podemos saber cuánto han estado creciendo los árboles en el último año.</CardText>
            </CardBody>
          </Card>
          <Card>
            <CardImg top width="100%" src={bosqueDos} alt="Card img" />
            <CardBody>
            <CardTitle>¿Quién certifica el proyecto?</CardTitle>
              <CardText>El Climate Action Reserve (CAR por sus siglas en inglés) es una organización ambiental sin fines de lucro que promueve la reducción de las emisiones de gas invernadero a través de políticas y soluciones de mercado confiables. CAR también establece estándares de alta calidad para proyectos de huella de carbono en el mercado voluntario de Norteamérica y opera un registro transparente y de acceso público para créditos de carbono generados bajo sus estándares.</CardText>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

export default InfoSubscription