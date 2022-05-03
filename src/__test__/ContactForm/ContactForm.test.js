/*eslint-disable*/
import { render } from '@testing-library/react';
import { ContactForm } from '../../components/ContactForm';
import React from 'react';
import { noop } from '../../utils/test';

it('ContactForm renders correctly', () => {
  const props = {
    onSubmit: noop
  };
  const tree = render(<ContactForm {...props} />);
  expect(tree).toMatchSnapshot();
});
