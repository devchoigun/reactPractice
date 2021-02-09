import React, { Component } from "react";
import PropTypes from "prop-types";

class R021_PropsRequired extends Component {
  render() {
    let { ReactString, ReactNumber } = this.props;

    return (
      <div style={{ padding: "0px" }}>
        {ReactString}
        {ReactNumber}
      </div>
    );
  }
}

R021_PropsRequired.prototypes = {
  ReactString: PropTypes.isRequired,
};

export default R021_PropsRequired;
