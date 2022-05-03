/*eslint-disable*/
import { render } from '@testing-library/react';
import { CustomDatePicker } from '../../components/CustomDatePicker';
import React from 'react';
import { noop } from '../../utils/test';

it('CustomDatePicker renders correctly', () => {
  const props = {
    value: new Date('2022-18-05 12:00'),
    onChange: noop,
  };
  const tree = render(<CustomDatePicker {...props} />);
  expect(tree).toMatchSnapshot();
});
