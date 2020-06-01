import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

// services
import { getAdmin as getAdminService } from './services'
import { getUser as getUserService } from './services'

import Home from './pages/Home'
import Login from './pages/Login'
import Register from './pages/Register'
import UsersList from './pages/UsersList'
import Perfil from './pages/Perfil'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state ={
      isUserLogedIn: false,
      userLoged: {}
    }
    this.userInfo = this.userInfo.bind(this)
  }

  async componentDidMount() {
    const authToken = await localStorage.getItem('authToken')
    if (authToken) {
      this.setState({
        isUserLogedIn: true,
      })
    }
    console.log(this.state.isUserLogedIn)
    if (this.state.isUserLogedIn) {
      this.userInfo()
    }
  }

  async userInfo() {
    const token = localStorage.getItem('authToken')
    const id = localStorage.getItem('userId')
    let adminResponse = await getAdminService(token, id)
    let responseJSON;
    if (adminResponse.ok) {
      responseJSON = await adminResponse.json()
      this.setState({
        userLoged: responseJSON.data.Admin
      })
    } else {
      let userResponse = await getUserService(token, id)
      responseJSON = await userResponse.json()
      const { firstName, lastName, email, role, subscription } = responseJSON.data.User
      this.setState({
        userLoged: { 
          firstName,
          lastName, 
          email, 
          role, 
          plan: subscription.plan,
          cost: subscription.cost,
          renewalDate: subscription.renewalDate,
          guests: subscription.guests
         }
      })
    }
  }

 

  render() {
    const { isUserLogedIn } = this.state
    const { role } = this.state.userLoged
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Home isUserLogedIn={isUserLogedIn} role={role} />
          </Route>
          <Route exact path="/login">
            <Login isUserLogedIn={isUserLogedIn}/>
          </Route>
          <Route exact path="/register">
            <Register isUserLogedIn={isUserLogedIn}/>
          </Route>
          <Route exact path="/users-info">
            <UsersList isUserLogedIn={isUserLogedIn}/>
          </Route>
          <Route exact path="/perfil">
            <Perfil isUserLogedIn={isUserLogedIn} data={this.state.userLoged} />
          </Route>
        </Switch>
      </Router>
    );
  }
}


