import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Header from './pages/Header';
import Register from './pages/Register';
import Profile from './pages/Profile';
import NewIncident from './pages/NewIncident';
import Logon from './pages/Logon';

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Header} />
        <Route path="/register" component={Register} />
        <Route path="/logon" component={Logon} />

        <Route path="/profile" component={Profile} />
        <Route path="/incidents/new" component={NewIncident} />
      </Switch>
    </BrowserRouter>
  );
}