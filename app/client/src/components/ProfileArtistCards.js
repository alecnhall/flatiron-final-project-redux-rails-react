import React, { Component } from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProfileArtistCards = ({ artists }) => {
  const cards = artists.map((artist) => {
    return (
      <Card style={{ width: "18rem" }} key={artist.id}>
        <Card.Img variant="top" src={artist.img} />
        <Card.Body>
          <Card.Title>{artist.name}</Card.Title>
          <Button variant="primary" as={Link} to={"/artist/" + artist.id}>
            See more...
          </Button>
        </Card.Body>
      </Card>
    );
  });

  console.log(artists);

  return <div className="artist-display">{cards}</div>;
};

export default ProfileArtistCards;
