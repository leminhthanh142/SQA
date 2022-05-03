/*eslint-disable*/
import { render } from '@testing-library/react';
import { HealthyMealIcon } from "../../../components/icons/HealthyMealIcon";
import React from 'react';

it('HealthyMealIcon renders correctly', () => {
  const tree = render(<HealthyMealIcon />);
  expect(tree).toMatchSnapshot();
});
