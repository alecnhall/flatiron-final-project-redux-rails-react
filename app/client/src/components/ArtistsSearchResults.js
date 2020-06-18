import React from "react";
import { connect } from "react-redux";
import ArtistCards from "./ArtistCards";

const Artists = ({ artists }) => {
  console.log(artists);
  return (
    <div>
      <ArtistCards artists={artists.artists} />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    artists: state.artists,
    loading: state.loading,
  };
};

export default connect(mapStateToProps)(Artists);
