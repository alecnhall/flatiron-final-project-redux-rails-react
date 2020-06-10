export const fetchArtists = (name) => {
  return (dispatch) => {
    dispatch({ type: "SEARCHING_ARTIST" });
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/user?q=${name}`)
      .then((res) => res.json())
      .then((results) => {
          console.log(results.data)
          const artists = results.data
          return dispatch({ type: "ADD_ARTISTS", artists});
      });
  };
};

