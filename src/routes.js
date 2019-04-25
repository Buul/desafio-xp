import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Login from './components/login';
import Home from './components/home';
import Album from './components/home/album';
import { isAuthenticated } from './services/auth';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props => (isAuthenticated() ? <Component {...props} /> : <Redirect to="/" />)}
  />
);

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <PrivateRoute path="/home" component={Home} />
      <PrivateRoute path="/album" component={Album} />
      <Route exact path="/" component={Login} />
      <Redirect from="*" exact to="/" />
    </Switch>
  </BrowserRouter>
);

export default Routes;
