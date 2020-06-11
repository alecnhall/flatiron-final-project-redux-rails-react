import React, { Component } from "react";
import { connect } from "react-redux";
import Artist from "./Artist";


class Artists extends Component {
    
  render() {
    const artists = this.props.artists.artists.map((artist) => {
      return <Artist key={artist.id} artist={artist} />;
    });

    return <div>{artists}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.artists,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Artists);
