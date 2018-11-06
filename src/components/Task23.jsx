import React from "react";
import { Card, Button, Icon } from "antd";
import { playTimer, stopTimer, refreshTimer } from "../actions/action-creators";
import { connect } from "react-redux";

const ButtonGroup = Button.Group;

class Task23 extends React.Component {
  constructor(state) {
    super(state);
    this.state = {
      timerView: "00:00:00",
      seconds: 0,
      minutes: 0,
      hours: 0,
      timer: null
    };
  }

  add = () => {
    let { seconds, minutes, hours } = this.state;
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
      if (minutes >= 60) {
        minutes = 0;
        hours++;
      }
    }
    const timerView =
      (hours ? (hours > 9 ? hours : "0" + hours) : "00") +
      ":" +
      (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") +
      ":" +
      (seconds > 9 ? seconds : "0" + seconds);
    this.setState({ seconds, minutes, hours, timerView });
    this.timer();
  };

  timer = () => {
    this.setState({ timer: setTimeout(() => this.add(), 1000) });
  };

  letsStart = () => {
    this.timer();
    const view = this.props.timerView;
    this.props.dispatchPlayTimer(view); //???????????????
  };

  letsStop = () => {
    const { timer } = this.state;
    clearTimeout(timer);
    this.props.dispatchStopTimer(); //???????????????
  };

  letsRefresh = () => {
    this.setState({
      seconds: 0,
      minutes: 0,
      hours: 0,
      timerView: "00:00:00"
    });
    this.props.dispatchRefreshTimer(); //???????????????
  };

  render() {
    return (
      <div>
        <Card
          title={
            <h2 style={{ fontSize: "55px", letterSpacing: "10px" }}>
              <time>{this.state.timerView}</time>
            </h2>
          }
          style={{ width: 1000 }}
        >
          <ButtonGroup>
            <Button onClick={this.letsStart} size="large">
              <Icon
                type="play-circle"
                style={{ fontSize: "50px", color: "blue" }}
              />
            </Button>
            <Button onClick={this.letsStop} size="large">
              <Icon
                type="pause-circle"
                style={{ fontSize: "50px", color: "red" }}
              />
            </Button>
            <Button onClick={this.letsRefresh} size="large">
              <Icon type="sync" style={{ fontSize: "50px", color: "green" }} />
            </Button>
          </ButtonGroup>
        </Card>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    view: state.storeOfTime.changedTime
    //reducerdeki value  combinedeki  store
  };
}

const mapDispatchToProps = dispatch => ({
  dispatchPlayTimer(time) {
    dispatch(playTimer(time));
  },
  dispatchStopTimer(time) {
    dispatch(stopTimer(time));
  },
  dispatchRefreshTimer(time) {
    dispatch(refreshTimer(time));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Task23);
