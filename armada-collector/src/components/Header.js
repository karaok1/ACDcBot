import React from 'react'
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core'
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
    },
    appBar: {
        // background: '#2E3B55', 
        background: 'rgba(0, 0, 0, 0.5)', 
        alignItems: "center"
    }
  }))

function Header() {
    const classes = useStyles();

    return(
        <AppBar position="static" className={classes.appBar}>
            <Toolbar>
                <Typography variant="h3" className={classes.title}>
                    ArmadaCollector
                </Typography>
                <Button className={classes.buttonStyles}>Login</Button>

            </Toolbar>
        </AppBar>

    )
}

export default Header