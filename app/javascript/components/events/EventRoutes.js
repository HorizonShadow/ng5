import React from "react"
import {Route} from "react-router-dom";
import EventList from "./EventList";

class EventRoutes extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route path={this.props.match.path} component={EventList} />
      </React.Fragment>
    );
  }
}

export default EventRoutes
