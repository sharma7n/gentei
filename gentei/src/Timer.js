import React, { Component } from 'react';
import './Timer.css';

const TimeUnit = (props) => {
    return (
        <div>
          <span className={props.displayClass}>
            {props.displayValue}
          </span>
          <div className="symbol">
            {props.symbol}
          </div>
        </div>
    );
};

class Timer extends Component {
  
  getTimeRemaining = (endtime) => {
      var t = Math.max(Date.parse(endtime) - Date.parse(new Date()), 0);
      var seconds = Math.floor((t / 1000) % 60);
      var minutes = Math.floor((t / 1000 / 60) % 60);
      var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
      return {
        total: t,
        hours: hours,
        minutes: minutes,
        seconds: seconds
      };
  }
  
  constructor(props) {
    super(props);
    this.state = this.getTimeRemaining(this.props.endtime);
  }
  
  componentDidMount = () => {
    var intervalId  = setInterval(this.updateTimer, 1000);
    this.setState({intervalId: intervalId});
  }
  
  componentWillUnmount = () => {
    clearInterval(this.state.intervalId);
  }
  
  updateTimer = () => {
    var remaining = this.getTimeRemaining(this.props.endtime);
    this.setState((state) => ({
      total: remaining.total,
      hours: ('0' + remaining.hours).slice(-2),
      minutes: ('0' + remaining.minutes).slice(-2),
      seconds: ('0' + remaining.seconds).slice(-2)
    }));
  };
  
  render() {
    return (
      <div className="timer">
        <TimeUnit displayClass="hours" symbol="時 / H" displayValue={this.state.hours} />&nbsp;
        <TimeUnit displayClass="minutes" symbol="分 / M" displayValue={this.state.minutes} />&nbsp;
        <TimeUnit displayClass="seconds" symbol="秒 / S" displayValue={this.state.seconds} />
      </div>
    );
  }
}

export default Timer;