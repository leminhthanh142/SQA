/*eslint-disable*/
import { render } from '@testing-library/react';
import { LeftArrow } from '../../components/LeftArrow';
import React from 'react';

it('LeftArrow renders correctly', () => {
  const tree = render(<LeftArrow />);
  expect(tree).toMatchSnapshot();
});
