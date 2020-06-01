import React from 'react'

import './NavBar.css'

import { Container, Row, Col } from 'reactstrap'

export default class NavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state= {
      isAdmin: false
    }
  }

  componentDidMount() {
    const { role } = this.props
    console.log(this.props)
    if (role === "Admin") {
      this.setState({
        isAdmin: true
      })
    }
  }  

  render() {
    const { isAdmin } = this.state
    console.log(this.state.isAdmin)
    return(
      <Container>
        <Row>
          <Col className="nav-container">
            
            {
              isAdmin ? 
              (<ul>
              <li>Perfil</li>
              <li>Lista de Usuarios</li>
              </ul>)
              : (
              <ul className="nav-links">
                <li><a href="/perfil"> Perfil</a></li>
                <li><a href="/users-info">Lista de Usuarios</a></li>
              </ul>)
            }
            
          </Col>
        </Row>
      </Container>
    )
  }
}