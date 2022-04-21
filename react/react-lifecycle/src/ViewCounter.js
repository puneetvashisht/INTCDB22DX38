import React, { Component } from "react";

export default class ViewCounter extends Component {
  constructor(props) {
    super(props);
    console.log("constructor called...");
  }

  componentDidMount() {
    console.log("componentDidMount called...");
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log(
      "shouldComponentUpdate called...",
      this.props.counter,
      nextProps.counter
    );
    if (this.props.counter !== nextProps.counter) {
      return true;
    }
  }

  componentDidUpdate() {
    console.log("componentDidUpdate called...");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called...");
  }

  render() {
    console.log("render called...");
    return <h2>{this.props.counter}</h2>;
  }
}
