/*eslint-disable*/
import { render } from '@testing-library/react';
import { HeroBackground } from '../../components/HeroBackground';
import React from 'react';

it('HeroBackground renders correctly', () => {
  const tree = render(<HeroBackground />);
  expect(tree).toMatchSnapshot();
});
