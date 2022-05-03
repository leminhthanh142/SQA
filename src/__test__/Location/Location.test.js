/*eslint-disable*/
import { render } from '@testing-library/react';
import { Location } from '../../components/Location';
import React from 'react';

it('Location renders correctly', () => {
  const tree = render(<Location />);
  expect(tree).toMatchSnapshot();
});
