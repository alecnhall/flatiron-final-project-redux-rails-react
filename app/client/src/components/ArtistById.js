import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchArtist } from "../actions";
import { params } from "react-router-dom";

class ArtistById extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // const { match: { params } =  this.props}
    // console.log(state);
    // this.fetchArtist(id);
  }

  render() {
    return (
      <div>
        <h1>Artist Info</h1>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artist: state.artist,
    loading: state.loading,
  };
};

function mapDispatchToProps(dispatch) {
  return { fetchArtist: (id) => dispatch(fetchArtist(id)) };
}

export default connect(mapStateToProps, mapDispatchToProps)(ArtistById);
