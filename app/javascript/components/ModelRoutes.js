import React from "react"
import PropTypes from "prop-types"
class ModelRoutes extends React.Component {
  render () {
    return (
      <React.Fragment>
        <Route path={this.props.path} component={this.props.list} />
      </React.Fragment>
    );
  }
}

export default ModelRoutes
