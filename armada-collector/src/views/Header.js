import React from 'react'
import { AppBar, Toolbar, Typography, Button, Container } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    buttonStyles: {
      flexDirection: "row",
    },
    title: {
      flexGrow: 1,
      fontWeight: 'fontWeightBold'
    },
    appBar: {
        background: 'rgba(236, 137, 23, .3)', 
    },
    appBarContainer: {
      marginLeft: '40px',
    }
  }))

function Header() {
    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
              <Container className={classes.appBarContainer}>
                <Typography variant="h3" className={classes.title}>
                    ArmadaCollector
                </Typography>
              </Container>
              <Button color="inherit">Login</Button>
            </Toolbar>
        </AppBar>

    )
}

export default Header