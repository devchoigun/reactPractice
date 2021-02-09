import React, { Component } from "react";
import { Badge, Button } from "reactstrap";

class R035_ReactstrapBadges extends Component {
  componentDidMount = async () => {
    const response = await fetch("http://date.jsontest.com/");
    const body = await response.json();
    alert(body.date);
  };

  render() {
    return <h1>fetch get</h1>;
  }
}

export default R035_ReactstrapBadges;
