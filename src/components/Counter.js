import React, { Component } from "react";
import Coin from "./Coin";
import "./Counter.css";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = { flips: 0, heads: 0, tails: 0, randomNumber: -1 };
    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    let randomNum = Math.floor(Math.random() * 2);
    if (randomNum === 0) {
      this.setState(curState => {
        return {
          flips: curState.flips + 1,
          heads: curState.heads + 1,
          randomNumber: randomNum
        };
      });
    } else if (randomNum === 1) {
      this.setState(curState => {
        return {
          flips: curState.flips + 1,
          tails: curState.tails + 1,
          randomNumber: randomNum
        };
      });
    }
  }

  render() {
    return (
      <div className="Counter">
        <h1>Let's flip a coin!</h1>
        <Coin randomNumber={this.state.randomNumber} />
        <button onClick={this.onButtonClick}>Flip Me!</button> <br />
        <br />
        Out of {this.state.flips}, there have been {this.state.heads} heads,{" "}
        {this.state.tails} tails.
      </div>
    );
  }
}

export default Counter;
