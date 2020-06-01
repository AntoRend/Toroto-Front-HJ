import React from 'react'

import { Row, Col } from 'reactstrap';
import { Link }  from 'react-router-dom';

import './Header.css'
import logo from './img/toroto-logo.png'

export default class Header extends React.Component {
  constructor(props) {
    super(props)
    this.logOut = this.logOut.bind(this)
  }

  logOut() {
    localStorage.removeItem('authToken')
    this.setState({
      isUserLogedIn: false
    })
    window.location.href = "/"
  }
  
  render() {
    const { isUserLogedIn } = this.props
    return (
      <div className="header">
        <Row className="header-container">
          <Col xs="6">
            <a href="/"><img src={logo} alt="logo" /></a>
          </Col> 
          <Col xs="6">
            {
              isUserLogedIn ? (
                <div className="buttons">
              <button type="submit" onClick={this.logOut}>Salir</button>
            </div>
              ) : (
                <div className="buttons">
              <button><Link to={'/login'}>Login</Link></button>
            </div>
              )
            }
            
          </Col>
        </Row>
      </div>
    )
  }
}
