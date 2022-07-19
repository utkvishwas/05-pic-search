import React from "react";
import Svg from "./svg";

class Search extends React.Component {
  state = { inputvalue: "" };
  onInputChange = (e) => {
    this.setState({ inputvalue: e.target.value });
  };

  onFormSubmit = (event) => {
    event.preventDefault();

    this.props.childtoparent(this.state.inputvalue);
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit} className="search">
        <input
          type="text"
          placeholder="Search"
          value={this.state.inputvalue}
          onChange={this.onInputChange}
        />
        <button type="submit" className="submitbutton">
          <Svg />
        </button>
      </form>
    );
  }
}

export default Search;
