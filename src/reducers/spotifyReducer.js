import { SPOTIFY_DATA, SELECTED_MEDIA } from '../helpers/constants';

const INITIAL_STATE = {
  spotifyData: {},
  selectMedia: null,
};

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case SPOTIFY_DATA:
      return {
        ...state,
        spotifyData: action.payload,
      };
    case SELECTED_MEDIA:
      return {
        ...state,
        selectMedia: action.payload,
      };
    default:
  }

  return state;
}
