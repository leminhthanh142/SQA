/*eslint-disable*/
import { render } from '@testing-library/react';
import { FoodMenuCard } from '../../components/FoodMenuCard';
import React from 'react';
import { noop } from "../../utils/test";

it('FoodMenuCard renders correctly', () => {
  const props = {
    name: 'Food Card',
    description: 'Description',
    price: 100,
    image: '',
    onOrder: noop,
  };
  const tree = render(<FoodMenuCard {...props} />);
  expect(tree).toMatchSnapshot();
});
