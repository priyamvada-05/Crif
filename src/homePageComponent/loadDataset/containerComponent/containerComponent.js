import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    '& > *': {
      marginTop: theme.spacing(10),
      marginLeft: theme.spacing(20),
      marginRight: theme.spacing(20),
      width: theme.spacing(135),
      height: theme.spacing(65),

    },
  },
}));

export default function ContainerComponent() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Paper elevation={1} />
    </div>
  );
}
