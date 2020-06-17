import React, { Component } from 'react'
import './customers.css'
import axios from 'axios'
import Grid from '@material-ui/core/Grid';

class Customers extends Component {
  constructor() {
    super()
    this.state = {
      customers: []
    }
  }

  componentDidMount() {
    fetch('/api')
      .then(res => res.json())
      .then(customers => this.setState({customers}, console.log('Customers fetched: ', customers)))
  }

  render() {
    var users = this.state.customers.map(customer => 
        <Grid container>
        <React.Fragment key={customer._id}>
            <Grid item xs={4}>
              {customer.discordId}
            </Grid>
            <Grid item xs={4}>
              {customer.expirationDate} 
            </Grid>
            <Grid item xs={4}>
              Used: {customer.trialUsed ? 'Used' : 'Not used'}
            </Grid>
        </React.Fragment>
        </Grid>
    )
    return (
      <div>
        {users}
      </div>
    )
  }
}

export default Customers