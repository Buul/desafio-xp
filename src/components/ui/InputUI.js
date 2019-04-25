import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import TypographyUI from './TypographyUI';
import pxToRem from '../../helpers/scales';

const InputCustomize = styled.input`
  border: none;
  border-bottom: ${pxToRem(2)} solid ${props => props.theme.colors.greyMedium} !important;
  background-color: ${props => props.theme.colors.greyDark} !important;
  color: ${props => props.theme.colors.greyLight};
  width: 100%;
  height: ${pxToRem(30)} !important;
  padding: ${pxToRem(15)} 0 ${pxToRem(15)} ${pxToRem(22)};
  outline: none;

  &:focus {
    border-bottom: ${pxToRem(2)} solid
      ${props => props.theme.input.hover.border.color[props.typeInput]} !important;
  }

  ${props =>
    props.errortext !== ''
      ? `
          &:hover {
            border:  ${pxToRem(2)} solid ${props.theme.input.hover.border.color.error};
          }

          &:focus {
            border:${pxToRem(2)} solid ${props.theme.input.hover.border.color.error};
            
          }
          border: ${pxToRem(2)} solid ${props.theme.input.hover.border.color.error};

        `
      : ''};
`;

const InputUI = props => {
  const { label, errortext, typeInput, formsimple } = props;
  return (
    <>
      {label && (
        <div style={{ margin: `0 0 ${pxToRem(15)}` }}>
          <TypographyUI size={14} weight="600" lineheight="16" color="greyMedium">
            {label}
          </TypographyUI>
        </div>
      )}
      <InputCustomize {...props} typeInput={typeInput} />
      {!formsimple && (
        <div style={{ height: pxToRem(20), marginTop: pxToRem(2) }}>
          <TypographyUI size={10} color="error" lineheight="16">
            {errortext && errortext}
          </TypographyUI>
        </div>
      )}
    </>
  );
};

InputUI.propTypes = {
  label: PropTypes.string,
  errortext: PropTypes.string,
  typeInput: PropTypes.string,
  formsimple: PropTypes.bool,
};

InputUI.defaultProps = {
  formsimple: false,
  label: '',
  errortext: '',
  typeInput: 'primary',
};

export default InputUI;
