import React from "react";
import ReactDOM from "react-dom";
import Main from "./App";
import "./index.css";
function Show() {
  return <Main />;
}

ReactDOM.render(<Show />, document.getElementById("root"));
