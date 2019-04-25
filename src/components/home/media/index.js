import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { isEmpty } from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { selectedMedia } from '../../../actions';
import Card from './Card';
import ModalPlayer from '../../player';
import { Line } from '../style';

const Media = ({
  spotifyData,
  spotifyData: { albums, artists, tracks },
  selectedMediaAction,
  history,
}) => {
  const [modalPlayer, setModalPlayer] = useState({ open: false, data: {} });

  const handleSelectedMedia = ({ data, type, image }) => {
    selectedMediaAction(data);
    switch (type) {
      case 'album':
        history.push('/album');
        break;
      case 'artist':
        history.push(`/albums/${data.name}`);
        break;
      case 'track':
        setModalPlayer({
          open: true,
          data: { previewUrl: data.preview_url, image, trackName: data.name },
        });
        break;
      default:
        break;
    }
  };

  return (
    <>
      {!isEmpty(spotifyData) && (
        <>
          <Card
            data={albums}
            title="Álbuns"
            type="album"
            onSelectMedia={data => handleSelectedMedia(data)}
          />
          <Line />
          <Card
            data={artists}
            title="Artistas"
            type="artist"
            onSelectMedia={data => handleSelectedMedia(data)}
          />
          <Line />
          <Card
            data={tracks}
            title="Músicas"
            type="track"
            onSelectMedia={data => handleSelectedMedia(data)}
          />
        </>
      )}
      <ModalPlayer
        open={modalPlayer.open}
        data={modalPlayer.data}
        handleClose={() => {
          setModalPlayer({ open: false, data: {} });
        }}
      />
    </>
  );
};
const mapStateToProps = state => ({
  spotifyData: state.spotifyReducer.spotifyData,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      selectedMediaAction: selectedMedia,
    },
    dispatch
  );

Media.propTypes = {
  spotifyData: PropTypes.shape({}).isRequired,
};

const MediaConnect = connect(
  mapStateToProps,
  mapDispatchToProps
)(Media);

export default withRouter(MediaConnect);
