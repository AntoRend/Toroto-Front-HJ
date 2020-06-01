import React from 'react'

import './UserCard.css'

import { Container, Row, Col, Card, CardBody, CardImg } from 'reactstrap'
import perfil from '../img/perfil.png'

// services
import { updateSubscription as updateSubscription } from '../../../../services'


export default class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isDropActive: false,
      isEditActive: false,
      newPlan: '',
      newCost: "",
      newDate: "",
      newGuest: ""
    }
    this.toogleDrop = this.toogleDrop.bind(this)
    this.toogleInput = this.toogleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleInput = this.handleInput.bind(this)
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit (event) {
    event.preventDefault()
    const token = localStorage.getItem('authToken')
    const { id } = this.props
    const { newPlan, newCost, newDate, newGuest } = this.state
    const newSubscription = {
      subscription: {
        plan: newPlan,
        cost: newCost,
        renewalDate: newDate,
        guests: newGuest
      }
    }
    console.log(newSubscription)
    let response = await updateSubscription(newSubscription, token, id)
    let responseJSON = await response.json()
    if (responseJSON.success) {
      this.toogleInput()
      window.location.href = "/users-info";
    } else if (!responseJSON.succes) {
      console.log('Error')
    }

   }
   
  toogleDrop() {
    const { isDropActive } = this.state;
    this.setState({
      isDropActive: !isDropActive,
    });
  }

  toogleInput() {
    const { isEditActive } = this.state;
    this.setState({
      isEditActive: !isEditActive,
    });
  }

  // saveNewInfo() {
  //   this.toogleInput()
  // }

  render() {
    const {
      firstName,
      lastName,
      email,
      carbonFootPrint,
      plan,
      cost,
      renewalDate,
      guests,
    } = this.props
    console.log(this.props)
    const { isDropActive, isEditActive, newPlan, newCost, newDate, newGuest } = this.state
    const dropClass = isDropActive ? "drop-active" : "";
    return( 
      <Container>
        <Row>
          <Col>
            <Card className="user-card">
              <div className="card-header">
                <CardImg src={perfil} alt="perfil" />
                <button 
                onClick={this.toogleDrop} 
                className="user-button"
                >{firstName} {" "} {lastName}</button>
              </div>
              <CardBody className={`card-content ${dropClass}`}>
                <div className="info-content">
                  <p>Email: {email}</p>
                  <p>Carbon Foot Print: {carbonFootPrint} Toneladas por año</p>
                </div>
                <div className="subscription-content">
                  <div className="subscription">
                    <p>Subscription</p>
                    {
                      isEditActive ? 
                      (<div>
                      <button onClick={this.handleSubmit}>Guardar</button>
                        <button className="cancel" onClick={this.toogleInput}>Cancelar</button>
                        </div>): (
                        <button onClick={this.toogleInput}>Editar</button>)
                    }
                  </div>
                    {
                      isEditActive ? 
                      (
                        <form>
                          <div className="info-edit">
                            <input
                            value={newPlan}
                            name={"newPlan"}
                            onChange={this.handleInput}
                            type={"text"} 
                            placeholder={"Plan"}></input>
                            <input
                            value={newCost}
                            name={"newCost"}
                            onChange={this.handleInput}
                            type={"text"} 
                            placeholder={"Costo"}></input>
                          </div>
                          <div className="info-edit">
                            <input
                            value={newDate}
                            name={"newDate"}
                            onChange={this.handleInput}
                            type={"text"} 
                            placeholder={"Renovacion"}></input>
                            <input
                            value={newGuest}
                            name={"newGuest"}
                            onChange={this.handleInput}
                            type={"text"} 
                            placeholder={"Invitados"}></input>
                          </div>
                        </form>
                      ) : (
                        <div>
                          <div className="info-subsc">
                            <p>Plan: {plan} </p>
                            <p>Cost: ${cost}</p>  
                          </div>
                          <div className="info-subsc">
                            <p>Renovacion: {renewalDate} </p>
                            <p>Invitados: {guests} </p>
                          </div>
                        </div>
                      )
                    }
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}