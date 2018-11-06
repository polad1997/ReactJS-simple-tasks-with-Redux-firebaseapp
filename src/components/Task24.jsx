import React from "react";
import { InputNumber, Button, Alert } from "antd";
import { connect } from "react-redux";
import { addGuessedNumber, addRandomNumber } from "../actions/action-creators";

class Task24 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: 1,
      color: "red",
      info: ""
    };
  }
  handleChange = value => {
    this.setState({ inputValue: value });
  };

  handleGuessNumber = () => {
    const randomNumber = this.props.randomNumber;
    const value = this.state.inputValue;
    console.log(randomNumber);
    if (value === randomNumber) {
      this.setState({ info: "Congrats!" });
      const guess = { number: value };
      this.props.dispatchAddGuessedNumber(guess);
    } else if (value > randomNumber) {
      this.setState({ info: "Please select smaller number" });
    } else {
      this.setState({ info: "Please select more great number" });
    }
  };

  render() {
    return (
      <div>
        {" "}
        <InputNumber
          min={1}
          max={100}
          defaultValue={1}
          onChange={this.handleChange}
        />
        <br />
        <Button type="primary" onClick={this.handleGuessNumber}>
          Guess
        </Button>
        <p style={{ marginTop: "15px", marginBottom: "20px", color: "red" }}>
          {this.state.info}
        </p>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    guessNumber: state.gameStore.guessNumber,
    randomNumber: state.gameStore.randomNumber
  };
}

const mapDispatchToProps = dispatch => ({
  dispatchAddGuessedNumber(guess) {
    dispatch(addGuessedNumber(guess));
  },
  dispatchAddRandomNumber(random) {
    dispatch(addRandomNumber(random));
  }
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task24);
