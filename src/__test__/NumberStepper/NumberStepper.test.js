/*eslint-disable*/
import { render } from '@testing-library/react';
import { NumberStepper } from '../../components/NumberStepper';
import React from 'react';

it('NumberStepper renders correctly', () => {
  const props = {
    activeStep: 0,
    labels: ['Step 1', 'Step 2', 'Step 3']
  }
  const tree = render(<NumberStepper {...props}/>);
  expect(tree).toMatchSnapshot();
});
