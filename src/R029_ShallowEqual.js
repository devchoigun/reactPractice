import React, { Component } from "react";
import { shallowEqualArrays, ShallowEqualArrays } from "shallow-equal";

class R029_ShallowEqual extends Component {
  constructor(props) {
    super(props);
    this.state = { StateString: "react" };
  }

  shouldComponentUpdate(nextProps, nextState) {
    return !shallowEqualArrays(this.state, nextState);
  }

  componentDidMount() {
    const object = { react: "200" };
    const Array1 = ["리액트", object];
    const Array2 = ["리액트", object];
    const Array3 = ["리액트", { react: "200" }];

    console.log(
      "shallowEqualArrays(Array1, Array2) : " +
        shallowEqualArrays(Array1, Array2)
    );
    console.log(
      "shallowEqualArrays(Array2, Array3) : " +
        shallowEqualArrays(Array2, Array3)
    );
  }

  render() {
    console.log("render() 실행");
    return (
      <div>
        <button onClick={(e) => this.buttonClick("String")}>문자열 변경</button>
        <button onClick={(e) => this.buttonClick("ArrayObj")}>
          객체 배열 변경
        </button>
      </div>
    );
  }
}

export default R029_ShallowEqual;
