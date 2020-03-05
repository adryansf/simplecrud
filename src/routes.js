import React from 'react';
import { Switch, Route } from 'react-router-dom';

// Components
import Home from '~/pages/Home';
import Users from '~/pages/Users';

export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/users" component={Users} />
    </Switch>
  );
};
