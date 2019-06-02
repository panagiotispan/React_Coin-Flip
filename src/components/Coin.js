import React, { Component } from "react";
import "./Coin.css";

class Coin extends Component {
  render() {
    if (this.props.randomNumber === 0) {
      return (
        <div className="Coin">
          <img src="/images/S_Half_Dollar_Obverse_2016.jpg" alt="head" />
        </div>
      );
    } else if (this.props.randomNumber === 1) {
      return (
        <div className="Coin">
          <img src="/images/71009269r.jpg" alt="tails" />
        </div>
      );
    } else return <div />;
  }
}

export default Coin;
