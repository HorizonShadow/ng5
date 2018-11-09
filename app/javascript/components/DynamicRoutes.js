import React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Routes from "./Routes";

class DynamicRoutes extends React.Component {
    render() {
        return(
            <Router>
                <Routes />
            </Router>
        )
    }
}

export default DynamicRoutes;