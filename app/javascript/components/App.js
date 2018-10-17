import React from "react"
import Layout from "./Layout";
import AppStore from '../stores/AppStore';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import EventRoutes from "./events/EventRoutes";

class App extends React.Component {
  render () {
    return (
      <Layout>
        <Router>
          <Switch>
            <Route exact path={'/events'} component={EventRoutes} />
          </Switch>
        </Router>
        Hello
      </Layout>
    );
  }
}

export default App
