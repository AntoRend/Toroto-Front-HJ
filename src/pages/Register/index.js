import React from 'react'

import './Register.css'

import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

//services
import { register as RegisterService } from '../../services'
import { logIn as LogInService } from '../../services'

import {Redirect} from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Form, 
  FormGroup, 
  Input } from 'reactstrap'

export default class Register extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      firstName: '',
      lastName: '',
      email: '',
      password: '',
      success: false,
    }
    this.handleInput = this.handleInput.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
    this.loginNewUser = this.loginNewUser.bind(this)
  }

  handleInput({ target: { name, value } }){
    this.setState({
      [name]: value
    })
    console.log(this.state.firstName)
  }

  async handleSubmit (event) {
    event.preventDefault();
    const { firstName, lastName, email, password } = this.state
    const data = {
      firstName,
      lastName,
      email,
      password
    }
    let response = await RegisterService(data)
    let responseJSON = await response.json()
    if (responseJSON.success) {
      this.loginNewUser()
    } else if (!responseJSON.succes) {
      this.setState({
        success: false
      })
    }
  }

  async loginNewUser() {
    const { email, password } = this.state
    const data = { email, password }
    let response = await LogInService(data)
    let responseJSON = await response.json()
    console.log(responseJSON)
    if (responseJSON.success) {
      localStorage.setItem('authToken', responseJSON.data.token)
      localStorage.setItem('userId', responseJSON.data.id)
      this.setState({
        success: true
      })
    }
  }

  render() {
    const { firstName, lastName, email, password, success } = this.state
    return (
      <Container>
        {success ? <Redirect to='/'/> : null}  
        <Header />
        <Row>
          <Col className="form-container">
            <h3>Registro</h3>
            <Form onSubmit={this.handleSubmit}>
              <Row>
                <Col>
                  <FormGroup>
                    <Input 
                    value={firstName}
                    name={"firstName"}
                    onChange={this.handleInput}
                    type={"text"} 
                    placeholder={"Nombre(s)"}
                    required></Input>
                  </FormGroup>         
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Input 
                   value={lastName}
                   name={"lastName"}
                   onChange={this.handleInput}
                   type={"text"} 
                   placeholder={"Apellido(s)"}
                   required></Input>
                  </FormGroup>         
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Input 
                    value={email}
                    name={"email"}
                    onChange={this.handleInput}
                    type={"email"} 
                    placeholder={"Email"}
                    required></Input>
                  </FormGroup>         
                </Col>
              </Row>
              <Row>
                <Col>
                  <FormGroup>
                    <Input 
                    value={password}
                    name={"password"}
                    onChange={this.handleInput}
                    type={"password"} 
                    placeholder={"Password"}
                    required></Input>
                  </FormGroup>         
                </Col>
              </Row>
                <Button className="register-button">Register</Button>
                <div className="link-to-register">
                  <h5>¿Ya tienes una cuenta?</h5>
                  <a href="/register">Inicia sesión</a>
                </div>
              </Form>
            </Col>
          </Row>
        <Footer />
      </Container>
    )
  }
}