import React from 'react';
import { connect } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './config';

const ConnectedSwitch = connect(state => ({
  location: state.location
}))(Switch)

export default  <ConnectedRouter history={history}>
  <ConnectedSwitch>
    <Route exact path="/" component={() => (<h1>Home <Link to="/about">About</Link></h1>)} />
    <Route path="/about" component={() => (<h1>About <Link to="/">Home</Link></h1>)} />
  </ConnectedSwitch>
</ConnectedRouter>;
