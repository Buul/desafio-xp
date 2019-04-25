import { SPOTIFY_DATA, SELECTED_MEDIA } from '../helpers/constants';

export function updateSpotifyData(dialog) {
  return {
    type: SPOTIFY_DATA,
    payload: dialog,
  };
}

export function selectedMedia(dialog) {
  return {
    type: SELECTED_MEDIA,
    payload: dialog,
  };
}
