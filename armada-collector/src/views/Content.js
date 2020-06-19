import React from 'react'
import { Button, makeStyles, Container, Typography } from '@material-ui/core'
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import FormLabel from '@material-ui/core/FormLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles((theme) => ({
    buttonStyles: {
        color: "white",
        fontSize: "1.5rem",
        maxHeight: "32px",
        display: 'flex'
    },
    title: {
        fontSize: "1rem"
    },
    root: {
        color: theme.palette.common.white,
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]: {
          height: '60vh',
          minHeight: 350,
          maxHeight: 1300,
        },
      },
      container: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      },
      rootContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
      paper: {
        padding: theme.spacing(2),
        color: 'white',
        background: 'rgba(0, 0, 0, 0.5)'
      },
      gridItem: {
          padding: theme.spacing(1.5)
      },
      priceCard: {
        padding: theme.spacing(2),
        color: 'white',
        background: 'rgba(0, 0, 0, 0.5)',
        textAlign: 'center'
      },
      alignItemsAndJustifyContent: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(236, 137, 23, 0.49)',
      },
      priceTag: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }
}))

function Content() {
    const classes = useStyles()

    const [spacing, setSpacing] = React.useState(2);
    const bull = <span className={classes.bullet}>•</span>;
  
    const handleChange = (event) => {
      setSpacing(Number(event.target.value));
    };

    return(
        <Container>
            <Grid container className={classes.container}>
                <Grid item sm className={classes.gridItem}>
                    <Paper className={classes.paper}>
                        <Typography variant="h5">
                            ArmadaCollector features:
                        </Typography>
                        <Typography>
                            + Collect boxes, shoot ships, shoot animals<br/>
                            + Avoid Islands<br/>
                            + Advanced human-like random moves.<br/>
                            + Automatic updates<br/>
                            + Auto repair<br/>
                            + Statistics<br/>
                            And much more will be added with time.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item sm>
                    <Paper className={classes.paper}>
                        <Typography variant="h5">
                            Top collectors:
                        </Typography>
                        <Typography>
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container>
                <Grid item sm className={classes.gridItem}>
                    <Card className={classes.priceCard} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                Standard
                            </Typography>
                            <Grid container className={classes.priceTag}>
                                <Typography variant="h4" component="h2">
                                    €10
                                </Typography>
                                <Typography variant="subtitle2">
                                / 30 days
                                </Typography>
                            </Grid>
                            <Typography className={classes.pos}>
                                {bull} Improve your game experience by automating your game with ArmadaCollector<br/>
                                {bull} Discord premium support<br/>
                                {bull} Discord premium role
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.alignItemsAndJustifyContent}>
                            <Button size="large" className={classes.buttonStyles}>
                                BUY
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm className={classes.gridItem}>
                    <Card className={classes.priceCard} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                Standard
                            </Typography>
                            <Grid container className={classes.priceTag}>
                                <Typography variant="h4" component="h2">
                                    €20
                                </Typography>
                                <Typography variant="subtitle2">
                                / 90 days
                                </Typography>
                            </Grid>
                            <Typography className={classes.pos}>
                                {bull} Improve your game experience by automating your game with ArmadaCollector<br/>
                                {bull} Discord premium support<br/>
                                {bull} Discord premium role
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.alignItemsAndJustifyContent}>
                            <Button size="large" className={classes.buttonStyles}>
                                BUY
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
                <Grid item sm className={classes.gridItem}>
                    <Card className={classes.priceCard} variant="outlined">
                        <CardContent>
                            <Typography className={classes.title} gutterBottom>
                                Standard
                            </Typography>
                            <Grid container className={classes.priceTag}>
                                <Typography variant="h4" component="h2">
                                    €60
                                </Typography>
                                <Typography variant="subtitle2">
                                / 1 year
                                </Typography>
                            </Grid>
                            <Typography className={classes.pos}>
                                {bull} Improve your game experience by automating your game with ArmadaCollector<br/>
                                {bull} Discord premium support<br/>
                                {bull} Discord premium role
                            </Typography>
                        </CardContent>
                        <CardActions className={classes.alignItemsAndJustifyContent}>
                            <Button size="large" className={classes.buttonStyles}>
                                BUY
                            </Button>
                        </CardActions>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}

export default Content