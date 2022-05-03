/*eslint-disable*/
import { render } from '@testing-library/react';
import { FoodCard } from '../../components/FoodCard';
import React from 'react';

it('FoodCard renders correctly', () => {
  const props = {
    name: 'Food Card',
    description: 'Description',
    price: 100,
    image: ''
  };
  const tree = render(<FoodCard {...props} />);
  expect(tree).toMatchSnapshot();
});
