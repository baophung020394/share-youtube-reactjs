import { Box, makeStyles } from '@material-ui/core';
import { Header, NotFound } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import Share from 'features/home/Share';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
const useStyles = makeStyles((theme) => ({
  header: {
    width: '100%',
    backgroundColor: '#ffffff',
  },
}));
function App() {
  const classes = useStyles();
  return (
    <div>
      <Box className={classes.header}>
        <Header />
      </Box>
      <Switch>
        <Route path='/'>
          <AdminLayout />
        </Route>
       
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
