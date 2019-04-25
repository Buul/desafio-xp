import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import pxToRem from '../../../helpers/scales';
import { Typography } from '../../ui';
import { formatNumber } from '../../../helpers/string';

const TrackContent = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: ${pxToRem(20)};
  width: 100%;
`;

const RowTrack = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: ${pxToRem(20)};
`;

const TrackList = ({ listTrack }) => (
  <TrackContent>
    {listTrack.map(item => {
      const tempTime = moment.duration(item.duration_ms);
      return (
        <RowTrack key={item.id}>
          <Typography margin="0 10px 0 0" size={13} weight="600" lineheight="16" color="greyMedium">
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
  </TrackContent>
);

TrackList.propTypes = {
  listTrack: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
};

export default TrackList;
