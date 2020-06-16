import { combineReducers } from "redux";

const rootReducer = combineReducers({
  artists: artistReducer,
  user: userReducer,
});

export default rootReducer;

function artistReducer(state = { artists: [], loading: false }, action) {
  switch (action.type) {
    case "SEARCHING_FOR_ARTIST":
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

    case "LOADING_ARTIST":
      return {
        ...state,
        artist: [...state.artist],
        loading: true,
      };

    case "ADD_ARTIST":
      return {
        ...state,
        artist: action.artist,
        loading: false,
      };

    default:
      return state;
  }
}

function userReducer(state = { user: [], loading: false }, action) {
  switch (action.type) {
    case "LOAD_USER":
      return {
        ...state,
        user: [...state.user],
        loading: true,
      };

    case "REGISTERING_USER":
      return {
        ...state,
        user: [...state.user],
        loading: true,
      };

    case "ADD_USER":
      return {
        ...state,
        user: action.user,
        loading: false,
      };

    default:
      return state;
  }
}
