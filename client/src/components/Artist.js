import React from "react";

const Artist = (props) => {
  return (
    <div>
      <div key={props.key}>
        <div>
          <img src={props.artist.picture}></img>
          <a>
            <h3>{props.artist.name}</h3>
          </a>
        </div>
        <button>Add To Favorite Artists</button>
      </div>
    </div>
  );
};

export default Artist;
