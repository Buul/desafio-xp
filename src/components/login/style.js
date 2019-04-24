import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import pxToRem from '../../helpers/scales';

const ContainerStyle = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
`;

const BoxLoginStyled = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;

  img {
    width: 100%;
    height: 100%;
  }

  .logo {
    height: ${pxToRem(150)};
    width: ${pxToRem(300)};
  }
`;

export const Container = ({ children }) => <ContainerStyle>{children}</ContainerStyle>;

Container.propTypes = {
  children: PropTypes.node.isRequired,
};

export const BoxLogin = ({ children }) => <BoxLoginStyled>{children}</BoxLoginStyled>;

BoxLogin.propTypes = {
  children: PropTypes.node.isRequired,
};
