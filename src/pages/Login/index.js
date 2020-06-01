import React from 'react'

import './Login.css'

// Components
import Header from '../../Components/Header'
import Footer from '../../Components/Footer'

// services
import { logIn as LogInService } from '../../services'

// External packages
import {Redirect} from 'react-router-dom';
import { 
  Container, 
  Row, 
  Col, 
  Button, 
  Form, 
  FormGroup, 
  Input } from 'reactstrap'

export default class LogIn extends React.Component {
  constructor(props) {
    super(props) 
    this.state = {
      email: '',
      password: ''
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }

  handleInput({ target: { name, value } }) {
    this.setState({
      [name]: value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    const { email, password } = this.state;
    const data = {
      email,
      password,
    };
    let response = await LogInService(data);
    let responseJSON = await response.json();
    if (responseJSON.success) {
      localStorage.setItem("authToken", responseJSON.data.token);
      localStorage.setItem('userId', responseJSON.data.id)
      this.setState({
        success: true,
      });
    } else if (!responseJSON.success) {
      this.setState({
        success: false,
      });
    }
  }

  render() {
    const { email, password, success } = this.state
     if (success) {
      window.location.href = "/";
    }
    return (
      <Container>
        <Header />
        <Row>
          <Col className="form-container">
            <h3>¡Hola de nuevo!</h3>
            <Form onSubmit={this.handleSubmit}>
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
                <Button type="submit" className="register-button">Continuar</Button>
                <div className="link-to-register">
                  <h5>¿Eres nuevo por aquí?</h5>
                  <a href="/register">Registrate</a>
                </div>
            </Form>
          </Col>
        </Row>
        <Footer />
      </Container>
    )
  }
}