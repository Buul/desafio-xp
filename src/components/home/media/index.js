import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';
import { selectedMedia } from '../../../actions';
import Card from './Card';

const Media = ({ spotifyData: { albums, artists, tracks }, selectedMediaAction, history }) => {
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
    <>
      <Card
        data={albums}
        title="Álbuns"
        type="album"
        onSelectMedia={data => handleSelectedMedia(data)}
      />
      <Card
        data={artists}
        title="Artistas"
        type="artist"
        onSelectMedia={data => handleSelectedMedia(data)}
      />
      <Card
        data={tracks}
        title="Músicas"
        type="track"
        onSelectMedia={data => handleSelectedMedia(data)}
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
