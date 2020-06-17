import React, { Component, Fragment } from 'react'
import Customers from './components/customers/customers'
import Header from './components/Header'
import Image from './components/img/background.jpg'
import CssBaseline from "@material-ui/core/CssBaseline";
import { withStyles } from "@material-ui/core/styles";
import Content from './components/Content'

const styles = theme => ({
	"@global": {
		body: {
			backgroundImage: `url(${Image})`,
			backgroundRepeat: "no-repeat",
			backgroundPosition: "center center",
			backgroundSize: "cover",
			backgroundAttachment: "fixed",
			height: "100%"
		},
		html: {
			height: "100%"
		},
		"#componentWithId": {
			height: "100%"
		}
	}
});

class App extends Component {
  render() {
    return (
      <Fragment>
        <CssBaseline />
        <Header/>
        <Content/>
      </Fragment>
    )
  }
}

export default withStyles(styles)(App)