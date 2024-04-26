import React, { Component } from "react";
import "../styles/App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      renderBall: false,
      posi: 0,
      ballPosition: { left: "0px" },
    };

    this.renderChoice = this.renderChoice.bind(this);
    this.buttonClickHandler = this.buttonClickHandler.bind(this);
  }

  buttonClickHandler() {
    this.setState({ renderBall: true });
  }

  renderChoice() {
    if (this.state.renderBall === false) {
      return (
        <button className="start" onClick={this.buttonClickHandler}>
          Click For One Ball
        </button>
      );
    } else if (this.state.renderBall === true) {
      return <div className="ball" style={this.state.ballPosition}></div>;
    }
  }

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.keyCode === 39) {
        this.setState({
          ballPosition: { left: this.state.posi + 5 + "px" },
          posi: this.state.posi + 5,
        });
      }
    });
  }

  render() {
    return <div className="playground">{this.renderChoice()}</div>;
  }
}

export default App;
