import React from "react"
import Layout from "./Layout";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventRoutes from "./events/EventRoutes";
import ApolloClient from "apollo-boost";
import CssBaseline from '@material-ui/core/CssBaseline';
import { ApolloProvider } from 'react-apollo';
import { createMuiTheme } from '@material-ui/core/styles';
import MuiThemeProvider from "@material-ui/core/styles/MuiThemeProvider";

console.log(document.querySelector('meta[name="csrf-token"]').content);
const client = new ApolloClient({
  uri: '/graphql',
  request: e => {
    e.setContext({
      headers: {
        'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').content
      }
    });

  }
});

const theme = createMuiTheme({
  palette: {
    type: 'dark'
  }
});

class App extends React.Component {
  // console.log(window.location);

  render () {
    return (
      <ApolloProvider client={client}>
        <CssBaseline/>
        <MuiThemeProvider theme={theme}>
          <Router>
            <Layout>
              {/*<Switch>*/}
                {/*<Route exact path={'/events'} component={EventRoutes} />*/}
              {/*</Switch>*/}
            </Layout>
          </Router>
        </MuiThemeProvider>
      </ApolloProvider>
    );
  }
}

export default App
