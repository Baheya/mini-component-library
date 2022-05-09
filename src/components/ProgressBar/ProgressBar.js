/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    '--height': 8 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px',
  },
  medium: {
    '--height': 12 + 'px',
    '--padding': 0,
    '--borderRadius': 4 + 'px',
  },
  large: {
    '--height': 24 + 'px',
    '--padding': 4 + 'px',
    '--borderRadius': 8 + 'px',
  },
};

const ProgressBar = ({ label, value, size }) => {
  const style = SIZES[size];
  return (
    <>
      <VisuallyHidden as="label" for="loadinglabel">
        {label}
      </VisuallyHidden>
      <Wrapper
        role="progressbar"
        aria-labelledby="loadinglabel"
        aria-valuenow={value}
        style={style}
      >
        <Bar width="100%">
          <rect height="100%" width={`${value}%`} fill={COLORS.primary} />
        </Bar>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div`
  background-color: ${COLORS.gray50};
  box-shadow: inset 0px 2px 4px ${COLORS.transparentGray35};
  border-radius: 8px;
  display: flex;
  align-items: center;
  padding: var(--padding);
`;

const Bar = styled.svg`
  border-radius: 4px;
  height: var(--height);
`;

export default ProgressBar;
