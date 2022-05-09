import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper value={value} onChange={onChange} width={displayedValue.length}>
      {children}
    </Wrapper>
  );
};

const Wrapper = styled.select`
  width: ${(props) => props.width + 6 + 'ch'};
  background-color: ${COLORS.transparentGray15};
  border: none;
  color: ${COLORS.gray700};
  border-radius: 8px;
  padding: 12px 16px;

  &:hover {
    color: ${COLORS.black};
  }
`;

export default Select;
