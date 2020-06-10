import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  artists: artistReducer
});

export default rootReducer;

function artistReducer(state = { artist: [], loading: false }, action){
  switch(action.type) {
    case "SEARCHING_FOR_ARTIST":
      return {
        ...state,
        artist: [...state.artist],
        loading: true
      }

    case "ADD_ARTIST":
      return {
        ...state,
        artist: action.artist,
        loading: false
      }

    default:
      return state
  }
}