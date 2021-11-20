import { Box, makeStyles } from '@material-ui/core';
import { Header } from 'components/Common';
import { Home } from 'features/home';
import Share from 'features/home/Share';
import React from 'react';
import { Route, Switch } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
  main: {
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(2, 3),
  },
}));

export function AdminLayout() {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Box className={classes.main}>
        <Switch>
          <Route exact path='/'>
            <Home />
          </Route>
          <Route path='/share'>
            <Share />
          </Route>
        </Switch>
      </Box>
    </Box>
  );
}
