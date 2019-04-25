import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pxToRem from '../../helpers/scales';
import { Typography } from '../ui';

const ContainerStyle = styled.div`
  background-color: ${props => props.theme.colors.greyDark};
  height: 100%;
  padding: ${pxToRem(40)};
`;

const ContentStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  img {
    border-radius: ${pxToRem(14)};
    height: 100%;
    width: 100%;
  }
`;

const LineStyle = styled.div`
  background-color: ${props => props.theme.colors.greyLight};
  height: ${pxToRem(1)};
  width: 100%;
  margin: ${pxToRem(24)} 0;
`;

export const Container = ({ children }) => <ContainerStyle>{children}</ContainerStyle>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};
export const Content = ({ children }) => <ContentStyle>{children}</ContentStyle>;

Content.propTypes = {
  children: PropTypes.node.isRequired,
};

const BoxMediaStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  width: ${pxToRem(200)};
  margin-bottom: ${pxToRem(20)};
`;

const DiskCoverStyle = styled.div`
  cursor: pointer;
  height: ${pxToRem(150)};
  width: ${pxToRem(200)};
`;

const LinkBtnVoltarStyle = styled.div`
  margin-bottom: ${pxToRem(20)};
`;

export const BoxMedia = ({ children }) => <BoxMediaStyle>{children}</BoxMediaStyle>;

BoxMedia.propTypes = {
  children: PropTypes.node.isRequired,
};

export const DiskCover = ({ children, onClick }) => (
  <DiskCoverStyle onClick={() => onClick()}>{children}</DiskCoverStyle>
);

DiskCover.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

DiskCover.defaultProps = {
  onClick: () => {},
};

export const LinkBtnVoltar = ({ onClickLink }) => (
  <LinkBtnVoltarStyle>
    <Typography onClickLink={onClickLink} size={14} weight="600" lineheight="16" color="greyLight">
      <div className="link">❮ Voltar</div>
    </Typography>
  </LinkBtnVoltarStyle>
);

LinkBtnVoltar.propTypes = {
  onClickLink: PropTypes.func.isRequired,
};

export const Line = () => <LineStyle />;
