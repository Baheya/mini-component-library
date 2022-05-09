import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    icon: 10,
    '--font-size': 14 + 'px',
    '--border-bottom': 1 + 'px',
  },
  large: {
    icon: 16,
    '--font-size': 16 + 'px',
    '--border-bottom': 2 + 'px',
  },
};

const IconInput = ({ label, icon, width = 250, size, placeholder }) => {
  const style = SIZES[size];
  return (
    <FakeInput tabIndex="0" style={style} width={width}>
      <VisuallyHidden>{label}</VisuallyHidden>
      <Icon id={icon} size={style.icon} />
      <Input style={style} placeholder={placeholder} />
    </FakeInput>
  );
};

const FakeInput = styled.div`
  display: flex;
  align-items: center;
  border-bottom: var(--border-bottom) solid ${COLORS.black};
  padding-bottom: 0.1em;
  width: ${(props) => `${props.width}px`};
  outline-offset: 2px;
  color: ${COLORS.gray700};

  &:hover {
    color: ${COLORS.black};
  }
`;

const Input = styled.input`
  border: none;
  outline: none;
  padding: 0;
  margin-inline-start: 0.3em;
  font-size: var(--font-size);
  font-weight: 800;
  color: inherit;
  width: 100%;

  &::placeholder {
    font-weight: 400;
    color: ${COLORS.gray500};
  }
`;

export default IconInput;
