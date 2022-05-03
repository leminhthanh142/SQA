/*eslint-disable*/
import { render } from '@testing-library/react';
import { CustomButton } from '../../components/CustomButton';
import React from 'react';
import { noop } from '../../utils/test';

it('CustomButton renders correctly', () => {
  const props = {
    onSubmit: noop
  };
  const tree = render(<CustomButton {...props} />);
  expect(tree).toMatchSnapshot();
});
