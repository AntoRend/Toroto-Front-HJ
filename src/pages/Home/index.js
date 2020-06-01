import React from 'react'

import './Home.css'

import Header from '../../Components/Header'
import NavBar from '../../Components/NavBar'
import PrinipalContent from '../../Components/PrincipalImage'
import InfoHome from './Components/InfoHome'
import InfoSubscription from './Components/InfoSubscription'
import Footer from '../../Components/Footer'

import { Container } from 'reactstrap';

export default class NoRegisteredPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      user: ""
    }
  }

  render() {
    const { isUserLogedIn } = this.props
    const rol = this.props.role
    return(
      <Container>
        <Header 
        isUserLogedIn={isUserLogedIn}/>
        {
          isUserLogedIn ? (<NavBar role={rol} />) : null
        }
        <PrinipalContent />
        <InfoHome />
        <InfoSubscription />
        <Footer />
      </Container>
    )
  }
}