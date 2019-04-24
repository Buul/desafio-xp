import React from 'react';
import SpotifyLogin from 'react-spotify-login';
import { Container, BoxLogin } from './style';
import logo from '../../assets/logo_3_xp.png';

const onSuccess = response => console.log(response);
const onFailure = response => console.error(response);

const login = () => (
  <Container>
    <BoxLogin>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <SpotifyLogin
        clientId="91b73167aa804abda4f2a1fb6637db41"
        redirectUri="http://localhost:8080"
        buttonText="ENTRAR COM SPOTIFY"
        className="spotify-btn"
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </BoxLogin>
  </Container>
);

export default login;
