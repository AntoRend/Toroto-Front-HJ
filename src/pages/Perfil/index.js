import React from 'react'

import './perfil.css'

import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap'
import perfil from './img/perfil.png'

import Header from '../../Components/Header'
import NavBar from '../../Components/NavBar'
import Footer from '../../Components/Footer'


export default class Perfil extends React.Component {
  constructor(props) {
    super(props)
  }
   
  render() {
    const {
      firstName,
      lastName,
      email,
      carbonFootprint,
      plan,
      cost,
      renewalDate,
      guests
    } = this.props.data
    console.log(this.props.data)
    return( 
      <Container>
        <Header />
        <NavBar />
        <Row>
          <Col>
            <Card className="user-card">
              <div className="card-header">
                <CardImg src={perfil} alt="perfil" />
                <button  
                className="user-button"
                >{firstName} {" "} {lastName}</button>
              </div>
              <CardBody className="card-conten">
                <div className="info-content">
                  <p>Email: {email}</p>
                  <p>Carbon Foot Print: {carbonFootprint} Toneladas por año</p>
                </div>
                <div className="subscription-content">
                  <p>Subscription</p>
                  <div className="info-subsc">
                    <p>Plan: {plan} </p>
                    <p>Cost: ${cost}</p>  
                  </div>
                  <div className="info-subsc">
                    <p>Renovacion: {renewalDate} </p>
                    <p>Invitados: {guests} </p>
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}