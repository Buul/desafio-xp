import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { Container, Content } from '../style';
import Card from '../media/Card';
import { selectedMedia, toggleSpinner, showMessageBox } from '../../../actions';
import { formatMessage } from '../../../services/exception';
import api from '../../../services/api';

const AlbumList = ({ artirst, history, selectedMediaAction, spinner, showMessage }) => {
  const [albums, setAlbums] = useState(null);

  useEffect(() => {
    if (!artirst) {
      history.push('/home');
    } else {
      spinner(true);
      api
        .get(`artists/${artirst.id}/albums`)
        .then(({ data }) => {
          setAlbums(data);
          spinner(false);
        })
        .catch(err => {
          const message = formatMessage(err);
          showMessage({ message: [message], icon: 'error' });
          spinner(false);
        });
    }
  }, []);

  const handleSelectedMedia = ({ data, type }) => {
    selectedMediaAction(data);
    switch (type) {
      case 'album':
        history.push('/album');
        break;

      default:
        break;
    }
  };
  return (
    <Container>
      <Content>
        <Card
          data={albums}
          title="Álbuns"
          type="album"
          onSelectMedia={data => handleSelectedMedia(data)}
        />
      </Content>
    </Container>
  );
};

AlbumList.propTypes = {
  artirst: PropTypes.shape({}),
  spinner: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  selectedMediaAction: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

AlbumList.defaultProps = {
  artirst: null,
};

const mapStateToProps = state => ({
  artirst: state.spotifyReducer.selectMedia,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectedMediaAction: selectedMedia,
      spinner: toggleSpinner,
      showMessage: showMessageBox,
    },
    dispatch
  );

const AlbumListConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(AlbumList);

export default withRouter(AlbumListConnect);
