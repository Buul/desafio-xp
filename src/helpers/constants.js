/* eslint-disable no-undef */
export const TOKEN_SPOTIFY = 'TOKEN_SPOTIFY';
export const CLIENT_ID = '91b73167aa804abda4f2a1fb6637db41';

// ACTIONS //
export const BUSY_COUNTER_ADD = 'BUSY_COUNTER_ADD';
export const BUSY_COUNTER_REMOVE = 'BUSY_COUNTER_REMOVE';
export const DIALOG_ADD = 'DIALOG_ADD';
export const DIALOG_REMOVE = 'DIALOG_REMOVE';
export const SELECTED_MEDIA = 'SELECTED_MEDIA';
export const SPOTIFY_DATA = 'SPOTIFY_DATA';

// URL SPOTIFY REDIRECT
export const URLS = {
  develop: 'http://localhost:8080/home',
  homolog: 'http://localhost:8080',
  production: 'https://desafio-xp.netlify.com/',
};

const env = ENV;
export const REDIRECT_URL = URLS[env];
