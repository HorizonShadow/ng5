import React from 'react';
import {Router} from "react-router-dom";
import Routes from "./Routes";
import { createMemoryHistory } from 'history';
import ApolloClient from "apollo-boost";
import {ApolloProvider} from "react-apollo";
import { createHttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import 'whatwg-fetch';

class StaticRoutes extends React.Component {
    render() {
        const client = new ApolloClient({
            ssrMode: true,
            request: op => {
                op.setContext({
                    headers: {
                        "X-CSRF-Token": this.props.csrf,
                    }
                })
            },
            cache: new InMemoryCache()
        });
        console.log(this.props.csrf);
        return(
            <ApolloProvider client={client}>
                <Router history={createMemoryHistory({ initialEntries: [this.props.path] })}>
                    <Routes />
                </Router>
            </ApolloProvider>
        )
    }
}

export default StaticRoutes;