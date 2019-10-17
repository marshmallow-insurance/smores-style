import React, {FC, useEffect, useState} from 'react';
import styled from 'styled-components';

import {Text} from '../Text';
import {Icon} from '../Icon';

import {theme} from '../theme';

export type DropdownItem = {
  label: string;
  value: string | number;
};

type Props = {
  /** ID, usually used for tests  */
  id: string;
  /** className attribute to apply classes from props */
  className?: string;
  /** label displayed above the dropdown  */
  label?: string;
  /** Placeholder (initial state) */
  placeholder?: string;
  /** Disabled flag */
  disabled?: boolean;
  /** list of items for the dropdown list */
  list: DropdownItem[];
  /** onSelect handler */
  onSelect: (element: string | number) => void;
};

export const Dropdown: FC<Props> = ({
  id,
  className = '',
  label,
  placeholder,
  disabled = false,
  list,
  onSelect,
}) => {

  const [value, setValue] = useState('');

  useEffect(() => {
    if (list.length === 1) {
      setValue(String(list[0].value));
      onSelect(String(list[0].value));
    } else {
      setValue('');
    }
  }, [list]);

  return (
    <Container className={className}>
      {label && (
        <Text tag="label" color="grey4" typo="label">
          {label}
        </Text>
      )}
      <Content>
        <Select
          id={id}
          disabled={disabled}
          onChange={(e: React.FormEvent<HTMLSelectElement>) => {
            setValue(e.currentTarget.value);
            onSelect(e.currentTarget.value);
          }}
          required
          value={value}
        >
          {list.length !== 1 && (
            <option value="" hidden>
              {placeholder}
            </option>
          )}
          {list.map((el, i) => (
            <option key={i} value={el.value}>
              {el.label}
            </option>
          ))}
        </Select>
        <Caret>
          <Icon render="caret" color="grey4" size={24} />
        </Caret>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 44px;
  width: 100%;
  margin: 0;
  padding: 0;
`;

const Content = styled.div`
  width: 100%;
  position: relative;
`;

const Select = styled.select`
  width: 100%;
  height: 32px;
  padding-right: 24px;
  background-color: ${theme.colors.white};
  border: none;
  border-bottom: 1px solid;
  border-color: ${theme.colors.grey4};
  border-radius: 0;
  font-size: 16px;
  cursor: pointer;
  appearance: none; /* remove default arrow */

  &:disabled {
    cursor: default;
  }

  &:not(:focus):invalid {
    color: ${theme.colors.grey4};
  }

  &:hover {
    border-color: ${theme.colors.grey6};
  }

  &:focus,
  &:checked {
    border-color: ${theme.colors.blue5};
  }
`;

const Caret = styled.div`
  position: absolute;
  top: 50%;
  z-index: 1;
  right: 0;
  pointer-events: none;
  transform: translateY(-50%);
`;
