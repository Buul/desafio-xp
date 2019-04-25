import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Modal } from 'antd';

import pxToRem from '../../helpers/scales';

const ModalStyle = styled(Modal)`
  .ant-modal-header {
    border-bottom: none;
    padding: 0;
    padding-top: ${props => pxToRem(props.titlestyle.peddingtop)};
  }

  .ant-modal-footer {
    border-top: none;
  }

  .ant-modal-content {
    border-radius: ${pxToRem(5)};
    box-shadow: 0 ${pxToRem(20)} ${pxToRem(25)} rgba(0, 0, 0, 0.1);
    background-color: ${props => props.theme.colors[props.backgroundColor]};
  }

  .ant-modal-close-x {
    font-size: ${pxToRem(15)};
    width: ${pxToRem(46)};
    height: ${pxToRem(46)};
    line-height: ${pxToRem(46)};
    color: ${props => props.theme.colors[props.closeColor]};
  }
  .ant-modal-title {
    align-items: center;
    display: flex;
    font-size: ${props => props.titlestyle.fontsize};
    font-weight: 600;
    justify-content: center;
    padding-top: ${pxToRem(10)};
    text-align: ${props => props.titlestyle.textalign};
  }
`;

const ModalUI = ({
  children,
  open,
  onCloseModal,
  titlestyle,
  title,
  size,
  backgroundColor,
  closeColor,
}) => (
  <ModalStyle
    titlestyle={titlestyle}
    width={pxToRem(size)}
    destroyOnClose
    footer={null}
    title={title}
    backgroundColor={backgroundColor}
    visible={open}
    closeColor={closeColor}
    onCancel={() => onCloseModal()}
  >
    {children}
  </ModalStyle>
);

ModalUI.propTypes = {
  onCloseModal: PropTypes.func,
  size: PropTypes.number,
  open: PropTypes.bool,
  closeColor: PropTypes.string,
  title: PropTypes.string,
  backgroundColor: PropTypes.string,
  children: PropTypes.node.isRequired,
  titlestyle: PropTypes.shape({
    fontsize: PropTypes.string,
    textalign: PropTypes.string,
    peddingtop: PropTypes.string,
  }),
};

ModalUI.defaultProps = {
  onCloseModal: () => {},
  backgroundColor: 'white',
  size: 400,
  open: false,
  closeColor: 'black',
  title: '',
  titlestyle: {
    fontsize: pxToRem(18),
    textalign: 'left',
  },
};

export default ModalUI;
