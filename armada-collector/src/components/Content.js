import React from 'react'
import { Button, makeStyles } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
    buttonStyles: {
        color: "green",
    }
}))

function Content() {
    const classes = useStyles()

    return(
        <Button className={classes.buttonStyles}>Login</Button>
    )
}

export default Content