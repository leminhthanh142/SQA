/*eslint-disable*/
import { render } from '@testing-library/react';
import { Flash } from '../../components/Flash';
import React from 'react';

it('Flash renders correctly', () => {
  const tree = render(<Flash />);
  expect(tree).toMatchSnapshot();
});
