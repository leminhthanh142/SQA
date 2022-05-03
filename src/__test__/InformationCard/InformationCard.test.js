/*eslint-disable*/
import { render } from '@testing-library/react';
import { InformationCard } from '../../components/InformationCard';
import React from 'react';

it('InformationCard renders correctly', () => {
  const tree = render(<InformationCard />);
  expect(tree).toMatchSnapshot();
});
