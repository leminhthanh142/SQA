/*eslint-disable*/
import { render } from '@testing-library/react';
import { RightArrow } from '../../components/RightArrow';
import React from 'react';

it('RightArrow renders correctly', () => {
  const tree = render(<RightArrow/>);
  expect(tree).toMatchSnapshot();
});
