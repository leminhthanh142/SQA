/*eslint-disable*/
import { render } from '@testing-library/react';
import { FastFoodIcon } from "../../../components/icons/FastFoodIcon";
import React from 'react';

it('FastFoodIcon renders correctly', () => {
  const tree = render(<FastFoodIcon />);
  expect(tree).toMatchSnapshot();
});
