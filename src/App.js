import React, { Component } from "react";
import Board from "./Components/Board/board";
import { stageDealMap } from "./data";
import "./App.css";
require("typeface-roboto");
class App extends Component {
  render() {
    return (
      <div>
        <Board initial={stageDealMap} />
      </div>
    );
  }
}

export default App;
