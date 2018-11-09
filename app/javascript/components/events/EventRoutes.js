import React from "react"
import {Route} from "react-router-dom";
import EventList from "./EventList";

class EventRoutes extends React.Component {
  render () {
    console.log("???");
    return(
      <Route path={this.props.match.path} component={EventList} />
    );
  }
}

export default EventRoutes
