import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import pxToRem from '../../../helpers/scales';
import { Typography } from '../../ui';
import { formatNumber } from '../../../helpers/string';
import ModalPlayer from '../../player';

const TrackContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxToRem(40)};
  width: 100%;

  @media ${props => props.theme.device.md} {
    margin: ${pxToRem(0)} 0 0 ${pxToRem(40)};
  }
`;

const RowTrack = styled.div`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  margin-bottom: ${pxToRem(20)};
`;

const TrackList = ({ listTrack, image }) => {
  const [modalPlayer, setModalPlayer] = useState({ open: false, data: {} });
  return (
    <TrackContent>
      {listTrack.map(item => {
        const tempTime = moment.duration(item.duration_ms);
        return (
          <RowTrack
            key={item.id}
            onClick={() => {
              setModalPlayer({
                open: true,
                data: { previewUrl: item.preview_url, image, trackName: item.name },
              });
            }}
          >
            <Typography
              margin="0 10px 0 0"
              size={13}
              weight="600"
              lineheight="16"
              color="greyMedium"
            >
              {item.track_number}.
            </Typography>
            <div style={{ width: '75%' }}>
              <Typography size={13} weight="600" lineheight="16" color="greyLight">
                {item.name}
              </Typography>
            </div>
            <Typography size={13} weight="600" lineheight="16" color="greyMedium">
              {`${tempTime.minutes()} : ${formatNumber(tempTime.seconds())}`}
            </Typography>
          </RowTrack>
        );
      })}
      <ModalPlayer
        open={modalPlayer.open}
        data={modalPlayer.data}
        handleClose={() => {
          setModalPlayer({ open: false, data: {} });
        }}
      />
    </TrackContent>
  );
};

TrackList.propTypes = {
  listTrack: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  image: PropTypes.string,
};

TrackList.defaultProps = {
  image: '',
};

export default TrackList;
