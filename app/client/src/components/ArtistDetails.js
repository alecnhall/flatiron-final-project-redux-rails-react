import React from "react";
import { Jumbotron, Button, Image } from "react-bootstrap";

const ArtistDetails = ({ artist }) => {
  return (
    <div>
      <Jumbotron>
        <Image src={artist.picture_medium} rounded />
        <span className="artist-name">{artist.name}</span>
        <span className="favorite-button">
          <Button variant="primary">Favorite</Button>
        </span>
      </Jumbotron>
    </div>
  );
};

export default ArtistDetails;
