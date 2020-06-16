import React, { Component } from "react";
import { connect } from "react-redux";
import ArtistCard from "./ArtistCard";

class Artists extends Component {
  render() {
    const artists = this.props.artists.artists;
    console.log(artists);
    return (
      <div className="artist-display">
        {artists.map((artist) => {
          return <ArtistCard key={artist.id} artist={artist} />;
        })}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    artists: state.artists,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Artists);
