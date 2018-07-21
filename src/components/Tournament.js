import React from 'react'
import Round from './Round'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import { withStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';


const styles = theme => ({
  card: {
    maxWidth: 1024,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  expand: {
    transform: 'rotate(0deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
    marginLeft: 'auto',
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  round: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }
});

const Tournament = (props) => {
  const { classes } = props;

  return (
    <Card className={classes.card}>
      <CardHeader
        title="StreetFighter Tournament 2018"
        subheader="September 14, 2016"
      />
      <Grid container justify="center" spacing={24}>
        {
          props.rounds.map((round, i) => {
            return <Grid  item xs sm={4}><CardContent>
              <Round className={classes.round} key={i} num={i} pairings={round.pairings} />
            </CardContent></Grid>
          })}
      </Grid>
    </Card>)
}
  ;
export default withStyles(styles)(Tournament)
