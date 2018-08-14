import React from 'react'
import { List, ListItem, ListItemText, ListSubheader } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles';
import { Card } from '@material-ui/core/Card';

const styles = theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
});


export default withStyles(styles)((props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
    <List subheader={<ListSubheader component="div">Pairing {props.num}</ListSubheader>}>
      {props.pairing.contestants.map((contestant, i) => {
        return (<ListItem button>
        <ListItemText className={classes.card} inset key={i} primary={contestant}/>
        </ListItem>)
      })}
    </List>
    </div>
  )
});
