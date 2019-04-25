import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Container, Content } from './style';
import Search from './Search';
import { toggleSpinner, showMessageBox, updateSpotifyData } from '../../actions';
import api from '../../services/api';
import { formatMessage } from '../../services/exception';
import Media from './media';

const Home = ({ spinner, updateSpotify, showMessage }) => {
  const handleOnSearch = search => {
    spinner(true);
    api
      .get(`search?q=${encodeURIComponent(search)}&type=artist,album,track`)
      .then(({ data }) => {
        updateSpotify(data);
        spinner(false);
      })
      .catch(err => {
        const message = formatMessage(err);
        showMessage({ message: [message], icon: 'error' });
        spinner(false);
      });
  };

  return (
    <Container>
      <Search onSearch={handleOnSearch} />
      <Content>
        <Media />
      </Content>
    </Container>
  );
};

Home.propTypes = {
  spinner: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  updateSpotify: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      spinner: toggleSpinner,
      showMessage: showMessageBox,
      updateSpotify: updateSpotifyData,
    },
    dispatch
  );

const HomeConnect = connect(
  null,
  mapDispatchToProps
)(Home);

export default HomeConnect;
