import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  artists: artistReducer
});

export default rootReducer;

function artistReducer(state = { artists: [], loading: false }, action){
  switch(action.type) {
    case "SEARCHING_FOR_ARTIST":
      return {
        ...state,
        artists: [...state.artists],
        loading: true
      }

    case "ADD_ARTISTS":
      return {
        ...state,
        artists: action.artists,
        loading: false
      }

    default:
      return state
  }
}