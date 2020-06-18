import React from "react";
import { Card } from "react-bootstrap";

const AlbumCards = ({ albums }) => {
  const cards = albums.map((album) => {
    return (
      <Card style={{ width: "18rem" }} key={album.id}>
        <Card.Img variant="top" src={album.cover} />
        <Card.Body>
          <Card.Title>{album.title}</Card.Title>
          <Card.Text>Release Date: {album.release_date}</Card.Text>
          <Card.Text>
            <a href={album.link}>Check Out on Deezer</a>
          </Card.Text>
        </Card.Body>
      </Card>
    );
  });
  return <div className="album-display">{cards}</div>;
};

export default AlbumCards;
