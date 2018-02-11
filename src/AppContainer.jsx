import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './config';
import App from './containers/App';

class AppContainer extends React.Component {
  render() {
    return (
      <ConnectedRouter history={history}>
        <div>
          <Route
            exact
            path="/"
            component={() => (
              <div>
                <h1>
                  <Link to="/search">Search </Link>
                  <Link to="/chat">Chat </Link>
                </h1>
              </div>
            )}
          />
          <Route
            path="/search"
            component={() => (
              <div>
                <h1>
                  <Link to="/">Home </Link>
                  <Link to="/chat">Chat </Link>
                </h1>
                <App />
              </div>
            )}
          />
          <Route
            path="/chat"
            component={() => (
              <div>
                <h1>
                  <Link to="/">Home </Link>
                  <Link to="/search">Search </Link>
                </h1>
                <div>WIP .. </div>
              </div>
            )}
          />
        </div>
      </ConnectedRouter>
    );
  }
}
export default AppContainer;
