import React from "react";
import { Button } from "antd";
import { connect } from "react-redux";
import { changeMyValue } from "../actions/action-creators";
import "antd/dist/antd.css";

class Task22 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  increment = () => {
    const value = this.props.value + 1;
    this.props.dispatchMyValue(value);
  };
  decrement = () => {
    const value = this.props.value - 1;
    this.props.dispatchMyValue(value);
  };
  resetAll = () => {
    const value = 0;
    this.props.dispatchMyValue(value);
  };
  render() {
    return (
      <div>
        <Button onClick={this.increment}>Plus</Button>
        <Button onClick={this.decrement}>Minus</Button>
        <Button onClick={this.resetAll}>Reset</Button>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    value: state.storeOfNumbers.myValue
  };
}

const mapDispatchToProps = dispatch => ({
  dispatchMyValue(value) {
    dispatch(changeMyValue(value));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task22);
