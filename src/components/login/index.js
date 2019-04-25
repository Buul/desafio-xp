import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SpotifyLogin from 'react-spotify-login';
import { Container, BoxLogin } from './style';
import logo from '../../assets/logo_3_xp.png';
import { REDIRECT_URL, CLIENT_ID } from '../../helpers/constants';
import { toggleSpinner, showMessageBox } from '../../actions';
import { login } from '../../services/auth';

class Login extends Component {
  onSuccess = response => {
    const { spinner, history } = this.props;
    spinner(true);
    login(response.access_token);
    history.push('/home');
    spinner(false);
  };

  onFailure = response => {
    const { spinner, showMessage } = this.props;
    spinner(true);
    console.error(response);
    showMessage({ message: ['Erro ao conectar com Spotify'], icon: 'error' });
    spinner(false);
  };

  render() {
    return (
      <Container>
        <BoxLogin>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <SpotifyLogin
            clientId={CLIENT_ID}
            redirectUri={REDIRECT_URL}
            buttonText="ENTRAR COM SPOTIFY"
            className="spotify-btn"
            scope="user-follow-modify user-follow-read user-library-read user-top-read"
            onSuccess={this.onSuccess}
            onFailure={this.onFailure}
          />
        </BoxLogin>
      </Container>
    );
  }
}

Login.propTypes = {
  spinner: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      spinner: toggleSpinner,
      showMessage: showMessageBox,
    },
    dispatch
  );

export default connect(
  null,
  mapDispatchToProps
)(Login);
