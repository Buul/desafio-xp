import React from 'react';
import PropTypes from 'prop-types';
import { Modal, Button, Typography } from '../ui';
import { Container, Line, Image } from './style';

const ModalPlayer = ({ open, handleClose, data }) => (
  <Modal open={open} onCloseModal={handleClose} backgroundColor="greyDark" closeColor="white">
    <Container>
      <Image>
        <img src={data.image} alt="img" />
      </Image>
      <Typography margin="20px 0 " size={13} weight="600" lineheight="16" color="greyLight">
        {data.trackName}
      </Typography>
      <audio controls>
        <track kind="captions" />
        <source src={data.previewUrl} />
      </audio>
      <Line />
      <Button height={30} width="50%" onClick={handleClose}>
        Sair
      </Button>
    </Container>
  </Modal>
);

ModalPlayer.propTypes = {
  open: PropTypes.bool,
  data: PropTypes.shape({}),
  handleClose: PropTypes.func.isRequired,
};
ModalPlayer.defaultProps = {
  open: false,
  data: {},
};

export default ModalPlayer;
