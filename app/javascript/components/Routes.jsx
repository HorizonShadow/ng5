import React from 'react';
import {Route, Switch} from "react-router-dom";
import EventRoutes from "./events/EventRoutes";
import Layout from "./Layout";

class Routes extends React.Component {
    render() {
        console.log(this.context);
        return(
            <Layout>
                <Switch>
                    <Route exact path={'/events'} component={EventRoutes} />
                    <Route component={(props) => {
                        console.log(props);
                        return "...";
                    }} />
                </Switch>
            </Layout>
        )
    }
}

export default Routes;