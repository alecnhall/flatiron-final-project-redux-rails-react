export const fetchArtists = (name) => {
  return (dispatch) => {
    dispatch({ type: "SEARCHING_ARTIST" });
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist?q=${name}`
    )
      .then((res) => res.json())
      .then((res) => {
        const artists = res.data;
        return dispatch({ type: "ADD_ARTISTS", artists });
      });
  };
};

export const fetchArtist = (id) => {
  return (dispatch) => {
    dispatch({ type: "SEARCHING_ARTIST" });
    fetch(
      `https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/${id}`
    )
      .then((res) => res.json())
      .then((res) => {
        const artist = res.data;
        return dispatch({ type: "ADD_ARTIST", artist });
      });
  };
};

export const fetchUser = () => {
  return (dispatch) => {
    dispatch({ type: "FETCHING_USER" });
    fetch("http://localhost:3001/sessions")
      .then((res) => res.json())
      .then((res) => {
        const user = res.data;
        if (res.data.logged_in) {
          this.props.handleSuccesfulAuth(respons.data);
          return dispatch({ type: "ADD_USER", user });
        }
      });
  };
};

export const registerUser = (formData) => {
  return (dispatch) => {
    dispatch({ type: "REGISTERING_USER" });
    fetch("http://localhost:3001/registrations", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: { formData },
    })
      .then((res) => res.json())
      .then((res) => {
        const user = res.data;
        return dispatch({ type: "ADD_USER", user });
      });
  };
};
