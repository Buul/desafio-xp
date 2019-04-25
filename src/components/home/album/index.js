import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import spotifyEmpty from '../../../assets/spotify_empty.jpg';
import { Typography } from '../../ui';
import { Container, Content, DiskCover, LinkBtnVoltar } from '../style';
import { toggleSpinner, showMessageBox } from '../../../actions';
import api from '../../../services/api';
import { formatMessage } from '../../../services/exception';
import TrackList from './TrackList';

const Album = ({ album, history, spinner, showMessage }) => {
  const [tracks, setTracks] = useState([]);
  useEffect(() => {
    if (!album) {
      history.push('/home');
    } else {
      spinner(true);
      api
        .get(`albums/${album.id}/tracks`)
        .then(({ data }) => {
          setTracks(data.items);
          spinner(false);
        })
        .catch(err => {
          const message = formatMessage(err);
          showMessage({ message: [message], icon: 'error' });
          spinner(false);
        });
    }
  }, []);

  const image = (album && (album.images.length && album.images[0].url)) || spotifyEmpty;
  return (
    <Container>
      <LinkBtnVoltar
        onClickLink={() => {
          history.push('/home');
        }}
      />

      <Content>
        <div className="box-album">
          {(album && (
            <div className="desk-info-album">
              <DiskCover>
                <img src={image} alt="img" />
              </DiskCover>
              <Typography
                margin="5px 0"
                size={13}
                weight="600"
                lineheight="16"
                color="white"
                textalign="center"
              >
                {album.name}
              </Typography>
              <Typography
                size={12}
                weight="600"
                lineheight="16"
                color="greyMedium"
                textalign="center"
              >
                {album.artists[0].name}
              </Typography>
            </div>
          )) || (
            <Typography
              margin="5px 0"
              size={13}
              weight="600"
              lineheight="16"
              color="white"
              textalign="center"
            >
              Nenhuma música encontrada
            </Typography>
          )}
          <TrackList listTrack={tracks} image={image} />
        </div>
      </Content>
    </Container>
  );
};

Album.propTypes = {
  album: PropTypes.shape({}),
  spinner: PropTypes.func.isRequired,
  showMessage: PropTypes.func.isRequired,
  history: PropTypes.shape({ push: PropTypes.func.isRequired }).isRequired,
};

Album.defaultProps = {
  album: {},
};

const mapStateToProps = state => ({
  album: state.spotifyReducer.selectMedia,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      spinner: toggleSpinner,
      showMessage: showMessageBox,
    },
    dispatch
  );

const AlbumConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Album);

export default withRouter(AlbumConnect);
