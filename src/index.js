import React from "react";
import "./search.css";
import Home from "./Home";
import ReactDOM from "react-dom";
if (module.hot) {
  module.hot.accept();
}

class App extends React.Component {
  render() {
    return <Home />;
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
