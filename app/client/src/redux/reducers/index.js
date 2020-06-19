import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  artists: artistsReducer,
  artist: artistReducer,
  albums: albumsReducer,
  userArtists: userArtistsReducer,
  favoritedArtists: favoritedArtistsReducer,
});

export default rootReducer;
function favoritedArtistsReducer(
  state = { favoritedArtists: [], loading: false },
  action
) {
  switch (action.type) {
    default:
      return state;
  }
}

function userArtistsReducer(
  state = { userArtists: [], loading: false },
  action
) {
  switch (action.type) {
    case "FETCHING_FAVORITE_ARTISTS":
      return {
        ...state,
        userArtists: [...state.userArtists],
        loading: true,
      };

    case "ADD_FAVORITE_ARTISTS":
      return {
        ...state,
        userArtists: action.userArtists,
        loading: false,
      };

    default:
      return state;
  }
}

function albumsReducer(state = { albums: [], loading: false }, action) {
  switch (action.type) {
    case "FETCHING_ARTIST_ALBUMS":
      return {
        ...state,
        albums: state.albums,
        loading: true,
      };

    case "ADD_ARTIST_ALBUMS":
      return {
        ...state,
        albums: action.artistAlbums,
        loading: false,
      };

    default:
      return state;
  }
}

function artistReducer(state = { artist: {}, loading: false }, action) {
  switch (action.type) {
    case "FETCHING_ARTIST":
      return {
        ...state,
        artist: state.artist,
        loading: true,
      };

    case "ADD_ARTIST":
      return {
        ...state,
        artist: action.payload.artist,
        isFavorited: action.payload.isFavorited,
        loading: false,
      };

    default:
      return state;
  }
}

function artistsReducer(state = { artists: [], loading: false }, action) {
  switch (action.type) {
    case "SEARCHING_ARTISTS":
      return {
        ...state,
        artists: [...state.artists],
        loading: true,
      };

    case "ADD_ARTISTS":
      return {
        ...state,
        artists: action.artists,
        loading: false,
      };

    case "CLEAR_SEARCH":
      return {
        ...state,
        artists: [],
      };

    default:
      return state;
  }
}

function userReducer(
  state = { user: {}, loading: false, loggedIn: false },
  action
) {
  switch (action.type) {
    case "FETCHING_USER":
      return {
        ...state,
        user: state.user,
        loading: true,
      };

    case "REGISTERING_USER":
      return {
        ...state,
        user: state.user,
        loading: true,
      };

    case "USER_LOGGED_IN":
      return {
        ...state,
        user: action.user,
        loggedIn: true,
        loading: false,
      };

    case "LOGGING_USER_OUT":
      return {
        ...state,
        user: {},
        loading: true,
      };

    case "USER_LOGGED_OUT":
      return {
        ...state,
        user: {},
        loggedIn: false,
        loading: false,
      };

    default:
      return state;
  }
}
