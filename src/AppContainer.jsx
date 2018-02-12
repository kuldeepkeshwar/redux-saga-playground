import React from 'react';
import { ConnectedRouter } from 'react-router-redux';
import { Route, Switch } from 'react-router';
import { Link } from 'react-router-dom';
import { history } from './config';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Search from './containers/Search';
import Chat from './containers/Chat';
import Page from './components/Page';

const SearchPage = ()=><Page Component={Search} />;
const ChatPage = () => <Page Component={Chat} />;

class AppContainer extends React.Component {
  render() {
    return (
      <MuiThemeProvider>
        <ConnectedRouter history={history}>
          <Switch>
            <Route
              path="/search"
              component={SearchPage}
            />
            <Route
              path="/chat"
              component={ChatPage}
            />
          </Switch>
        </ConnectedRouter>
      </MuiThemeProvider>
    );
  }
}
export default AppContainer;
