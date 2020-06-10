import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtist } from "../actions/index";

class Search extends Component {
  constructor() {
    super();

    this.state = {
      name: "",
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.name);
    // this.props.fetchArtist(this.state.name);
    this.setState({
      name: "",
    });
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Search Artist or Band"
            required
          />
          <button type="submit">Search</button>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArtist: () => dispatch(fetchArtist()),
  };
};

export default connect(mapDispatchToProps)(Search);
