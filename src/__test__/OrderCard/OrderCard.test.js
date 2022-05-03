/*eslint-disable*/
import { render } from '@testing-library/react';
import { OrderCard } from '../../components/OrderCard';
import React from 'react';
import { noop } from "../../utils/test";

it('OrderCard renders correctly', () => {
  const props = {
    image: '',
    name: 'OrderCard',
    price: 1,
    quantity: 1,
    onAddOrder: noop,
    onRemoveOrder: noop,
    totalPrice: 1,
  }
  const tree = render(<OrderCard {...props}/>);
  expect(tree).toMatchSnapshot();
});
