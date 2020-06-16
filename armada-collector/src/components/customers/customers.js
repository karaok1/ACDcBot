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
      <React.Fragment key={customer._id}>
        <Grid item xs={6}>
          {customer.expirationDate}
        </Grid>
      </React.Fragment>
    )
    return (
      <div>
        <h2>Customers</h2>
        <Grid container>
        {users}
        </Grid>
      </div>
    )
  }
}

export default Customers