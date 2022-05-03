/*eslint-disable*/
import { render } from '@testing-library/react';
import { CoffeeIcon } from "../../../components/icons/CoffeeIcon";
import React from 'react';

it('CoffeeIcon renders correctly', () => {
  const tree = render(<CoffeeIcon />);
  expect(tree).toMatchSnapshot();
});
