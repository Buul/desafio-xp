import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pxToRem from '../../helpers/scales';

const ContainerStyle = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;

  img {
    border-radius: ${pxToRem(14)};
    height: 100%;
    width: 100%;
  }
`;
const ImageStyle = styled.div`
  cursor: pointer;
  height: ${pxToRem(150)};
  width: ${pxToRem(200)};
`;

const LineStyle = styled.div`
  background-color: ${props => props.theme.colors.greyLight};
  height: ${pxToRem(1)};
  width: 100%;
  margin: ${pxToRem(24)} 0;
`;

export const Container = ({ children, margin }) => (
  <ContainerStyle margin={margin}> {children}</ContainerStyle>
);

Container.propTypes = {
  margin: PropTypes.string,
  children: PropTypes.node.isRequired,
};
Container.defaultProps = {
  margin: `${pxToRem(28)} ${pxToRem(30)} ${pxToRem(4)}`,
};

export const Image = ({ children }) => <ImageStyle>{children}</ImageStyle>;

Image.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Line = () => <LineStyle />;
