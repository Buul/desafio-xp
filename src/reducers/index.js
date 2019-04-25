import { combineReducers } from 'redux';
import busyCounterReducer from './busyCounterReducer';
import dialogReducer from './dialogReducer';
import spotifyReducer from './spotifyReducer';

const rootReducer = combineReducers({
  busyCounterReducer,
  dialogReducer,
  spotifyReducer,
});

export default rootReducer;
