import React from 'react'

import './UsersList.css'

// External packages
import { Container } from 'reactstrap'

// components
import Header from '../../Components/Header'
import UserCard from './Components/UserCard'
import Footer from '../../Components/Footer'

// services
import { getUsers as getUsersService } from '../../services'
import { updateSubscription } from '../../services'

export default class UsersList extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      users: []
    }
    this.renderUsers = this.renderUsers.bind(this)
  }

  async componentDidMount() {
    const token = localStorage.getItem('authToken')
    let response = await getUsersService(token)
    let responseJSON = await response.json()
    
    this.setState({
      users: responseJSON.data.Users
    })
    
  }

  renderUsers() {
    const { users } = this.state
    return users.map(({
      firstName,
      lastName,
      email,
      carbonFootprint,
      subscription,
      _id
    }) => {
      return <UserCard 
      key={_id}
      id={_id}
      firstName={firstName}
      lastName={lastName}
      email={email}
      carbonFootPrint={carbonFootprint}
      plan={subscription.plan}
      cost={subscription.cost}
      renewalDate={subscription.renewalDate}
      guests={subscription.guests}
      />
    })
  }

  render() {
    return( 
      <Container>
        <Header />
        <div>{this.renderUsers()}</div>
        <Footer />
      </Container>
    )
  }
}