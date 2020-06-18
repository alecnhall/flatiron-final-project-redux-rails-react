import React from "react";
import AlbumCards from "./AlbumCards";
const ArtistAlbums = ({ albums }) => {
  return (
    <div>
      <h1>Albums</h1>
      <AlbumCards albums={albums.albums} />
    </div>
  );
};

export default ArtistAlbums;
