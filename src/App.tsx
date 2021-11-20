import { NotFound } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/'>
          <Redirect to='/admin/dashboard' />
        </Route>
        <Route path='/admin'>
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
