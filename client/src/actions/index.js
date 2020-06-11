export const fetchArtists = (name) => {
  return (dispatch) => {
    dispatch({ type: "SEARCHING_ARTIST" });
    fetch(`https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${name}`)
      .then((res) => res.json())
      .then((results) => {
          const artists = results.data
          return dispatch({ type: "ADD_ARTISTS", artists});
      });
  };
};

export const registerUser = (newUser) => {
  return (dispatch) => {
    dispatch({ type: "CREATE_USER", newUser});
    fetch("http://localhost:3001/registrations", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "ContentType": "application/json"
      },
      credentials: { withCredentials: true }
    })
    .then((response) => {
      if (response.data.status === "created") {
        this.props.handleSuccessfulAuth(response.data);
      }
    })
    .catch((error) => {
      console.log("registration error", error);
    });
  }
}